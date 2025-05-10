// src/navigation/AppDrawerNavigator.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useTheme } from 'react-native-paper'; // Use Paper theme
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppTabsNavigator from './AppTabsNavigator'; // The tabs navigator is part of the drawer content
import SettingsScreen from '../screens/App/SettingsScreen';

const Drawer = createDrawerNavigator();

const AppDrawerNavigator = () => {
    const theme = useTheme(); // Access Paper theme

    return (
        <Drawer.Navigator
            screenOptions={{
                 headerShown: false, // Hide the main drawer header, headers will be in tabs/screens
                 drawerActiveTintColor: theme.colors.primary,
                 drawerInactiveTintColor: theme.colors.text,
                 drawerStyle: {
                    backgroundColor: theme.colors.background,
                 },
                 // Header options for screens *within* the drawer can be defined here
                 // or more commonly, within the screen component's options.
            }}
        >
            {/* This will display the Bottom Tabs Navigator inside the drawer */}
            <Drawer.Screen
                name="HomeTabs"
                component={AppTabsNavigator} // Tabs Navigator
                options={{
                    title: 'Home', // Title shown in the drawer menu
                    drawerIcon: ({ color, size }) => (
                        <Icon name="home" size={size} color={color} />
                    ),
                    headerShown: false, // Hide header here, as tabs navigator handles it
                }}
            />
            <Drawer.Screen
                 name="Settings"
                 component={SettingsScreen}
                 options={{
                    title: 'Settings', // Title shown in the drawer menu
                    drawerIcon: ({ color, size }) => (
                         <Icon name="cog" size={size} color={color} />
                    ),
                    headerShown: true, // Show header for the settings screen
                     headerStyle: {
                         backgroundColor: theme.colors.primaryContainer, // Optional header styling
                     },
                     headerTintColor: theme.colors.onPrimaryContainer, // Optional header text color
                 }}
            />
             {/* Add other main sections of your app here */}
        </Drawer.Navigator>
    );
};

export default AppDrawerNavigator;