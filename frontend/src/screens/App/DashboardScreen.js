// src/screens/App/DashboardScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Title, useTheme } from 'react-native-paper';
import { useAuth } from '../../context/AuthContext';

const DashboardScreen = () => {
  const { user, logout } = useAuth();
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Title style={styles.title}>Welcome to the Dashboard!</Title>
      {user ? (
        <>
          <Text style={styles.userInfo}>Hello, {user.name}!</Text>
          <Text style={styles.userInfo}>Your email is: {user.email}</Text>
          {/* Add more dashboard content here */}
          <Button
            mode="outlined" // Optional: outlined style for logout
            onPress={logout}
            style={styles.logoutButton}
            icon="logout"
          >
            Logout
          </Button>
        </>
      ) : (
         <Text>Loading user data...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  userInfo: {
      fontSize: 18,
      marginBottom: 10,
      textAlign: 'center',
  },
   logoutButton: {
       marginTop: 30,
       width: '60%', // Make button a bit wider
   }
});

export default DashboardScreen;