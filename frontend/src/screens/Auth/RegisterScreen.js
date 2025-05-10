// src/screens/Auth/RegisterScreen.js
import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, Title, useTheme } from 'react-native-paper';
import { useAuth } from '../../context/AuthContext';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const theme = useTheme();

  const handleRegister = async () => {
    setLoading(true);
    try {
      await register(name, email, password);
      // Navigation handled by AppNavigator based on context state
    } catch (error) {
       Alert.alert('Registration Failed', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Title style={styles.title}>Register</Title>
      <TextInput
        label="Name"
        style={styles.input}
        value={name}
        onChangeText={setName}
        mode="outlined"
      />
      <TextInput
        label="Email"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
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
        mode="contained"
        onPress={handleRegister}
        loading={loading}
        disabled={loading}
        style={styles.button}
      >
        Register
      </Button>
      <Button
        mode="text"
        onPress={() => navigation.navigate('Login')}
        style={styles.linkButton}
      >
        Already have an account? Login
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
    fontSize: 28,
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    marginBottom: 15,
  },
   button: {
       marginTop: 10,
       paddingVertical: 5,
   },
    linkButton: {
        marginTop: 15,
    }
});

export default RegisterScreen;