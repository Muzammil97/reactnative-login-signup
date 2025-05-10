// src/api/api.js
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// ** IMPORTANT: Replace with your backend's local IP address and port **
const API_BASE_URL = 'http://192.168.0.102:5000/api'; // Your backend API (make sure this is the correct, current IP)
// --- DummyJSON API Base URL ---

const api = axios.create({
  baseURL: API_BASE_URL, // Default is your backend API
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include the token if available for *your* backend calls
api.interceptors.request.use(
  async (config) => {
    // Only add token if the request is specifically targeting your backend API
    // (This check assumes your backend API is the only one using the 'api' instance initially)
    // A more robust check might be needed if 'api' base URL changes or is sometimes used for other hosts
    if (config.baseURL === API_BASE_URL) {
        const token = await AsyncStorage.getItem('userToken');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor (optional, for handling token expiration etc.)
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    // Handle 401 specifically for *your* backend API calls
    if (error.config.baseURL === API_BASE_URL && error.response && error.response.status === 401) {
       console.log('Unauthorized request to your backend (token might be expired or invalid).');
       // In a real app, you might dispatch a logout action here if the 401 means the token is permanently invalid
       // (e.g., user logged out elsewhere, token revoked).
       // For simple expiration, the AuthContext useEffect might handle re-auth on app start.
    }
    return Promise.reject(error);
  }
);

// --- Auth & User Endpoints (use 'api', which points to your backend) ---
const authApi = {
  register: (userData) => api.post('/auth/register', userData),
  login: (userData) => api.post('/auth/login', userData),
  getMe: () => api.get('/auth/me'), // Protected endpoint
};

const exportedApis = {
    ...authApi,
};

// Export your backend APIs as default, and the external DummyJSON API separately
export default exportedApis