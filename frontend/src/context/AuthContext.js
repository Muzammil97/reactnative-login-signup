// src/context/AuthContext.js (Updated)
import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../api/api'; // Import the combined API client

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Holds user data if authenticated
  const [isLoading, setIsLoading] = useState(true); // To check token on app start

  // Check for token on app startup
  useEffect(() => {
    const loadUser = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        if (token) {
          const res = await api.getMe(); // Uses the token from storage via interceptor
          setUser(res.data); // Assuming getMe returns user data
        }
      } catch (e) {
        console.log('Failed to load user token or get user data:', e.response?.data || e.message); // Use console.log
        await AsyncStorage.removeItem('userToken'); // Clear invalid token
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    loadUser();
  }, []);

  const login = async (email, password) => {
    try {
      const res = await api.login({ email, password });
      const { token, ...userData } = res.data;

      await AsyncStorage.setItem('userToken', token);
      setUser(userData);
      return true;
    } catch (error) {
      console.log('Login error:', error.response?.data || error.message); // Use console.log
      throw error.response?.data?.message || 'Login failed';
    }
  };

  const register = async (name, email, password) => {
    try {
      const res = await api.register({ name, email, password });
      const { token, ...userData } = res.data;

      await AsyncStorage.setItem('userToken', token);
      setUser(userData);
      return true;
    } catch (error) {
      console.log('Register error:', error.response?.data || error.message); // Use console.log
       throw error.response?.data?.message || 'Registration failed';
    }
  };



  const logout = async () => {
    try {
      await AsyncStorage.removeItem('userToken'); // Remove the token
      setUser(null); // Clear user state
    } catch (e) {
      console.log('Failed to remove token:', e); // Use console.log
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};