// src/screens/Auth/LoginScreen.js
import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, Title, useTheme, Text } from 'react-native-paper'; // Import Paper components
import { useAuth } from '../../context/AuthContext';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const theme = useTheme(); // Access Paper theme

  const handleLogin = async () => {
    setLoading(true);
    try {
      await login(email, password);
      // Navigation handled by AppNavigator based on context state
    } catch (error) {
      Alert.alert('Login Failed', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Title style={styles.title}>Login</Title>
      <TextInput
        label="Email"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
        mode="outlined" // Optional: use outlined style
      />
      <TextInput
        label="Password"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        mode="outlined"
      />
      <Button
        mode="contained" // Optional: use contained style
        onPress={handleLogin}
        loading={loading}
        disabled={loading}
        style={styles.button}
      >
        Login
      </Button>
       <Button
         mode="text"
         onPress={() => navigation.navigate('Register')}
         style={styles.linkButton}
       >
         Don't have an account? Register
       </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28, // Slightly larger title
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    marginBottom: 15, // Increased spacing
  },
   button: {
       marginTop: 10,
       paddingVertical: 5, // Add padding
   },
    linkButton: {
        marginTop: 15,
    }
});

export default LoginScreen;