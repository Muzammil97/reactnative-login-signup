// src/navigation/AppNavigator.js (Updated)
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../context/AuthContext';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import AuthStack from './AuthStack'; // Import AuthStack
import AppDrawerNavigator from './AppDrawerNavigator'; // Import AppDrawerNavigator
import { useTheme } from 'react-native-paper';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const { user, isLoading } = useAuth();
  const theme = useTheme();

  if (isLoading) {
    return (
      <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        // User is authenticated, show the Drawer Navigator
        <Stack.Screen name="App" component={AppDrawerNavigator} />
      ) : (
        // User is NOT authenticated, show the Auth Stack
        <Stack.Screen name="Auth" component={AuthStack} />
      )}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
});

export default AppNavigator;