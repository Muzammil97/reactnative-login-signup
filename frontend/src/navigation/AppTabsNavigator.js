// src/navigation/AppTabsNavigator.js (Updated)
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Example icon library
import DashboardScreen from '../screens/App/DashboardScreen';
import ProductsStack from './ProductsStack'; // Import the Products Stack Navigator
import CounterScreen from '../screens/App/CounterScreen'

const Tab = createBottomTabNavigator();

const AppTabsNavigator = () => {
    const theme = useTheme();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false, // Hide header here, let the *nested* stacks handle it
                tabBarActiveTintColor: theme.colors.primary,
                tabBarInactiveTintColor: theme.colors.text,
                 tabBarStyle: {
                    backgroundColor: theme.colors.background,
                    borderTopColor: theme.colors.outlineVariant,

                 },
                 tabBarLabelStyle: {
                    fontSize: 12,
                    marginBottom: 2,
               },
                headerStyle: {
                   backgroundColor: theme.colors.primaryContainer,
               },
               headerTintColor: theme.colors.onPrimaryContainer,
               headerTitleStyle: {
                   fontWeight: 'bold',
               },
               contentContainerStyle: {
                    flex: 1,
               },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    // Define icons for each route
                    if (route.name === 'DashboardTab') {
                        iconName = focused ? 'view-dashboard' : 'view-dashboard-outline';
                    } else if (route.name === 'ProductsTab') { // Updated name
                         iconName = focused ? 'shopping' : 'shopping-outline';
                    } else if (route.name === 'Counter') {
                        iconName = focused ? 'numeric' : 'numeric-outline'; // Example icon
                    }
                    return <Icon name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen
                name="DashboardTab"
                component={DashboardScreen}
                options={{ title: 'Dashboard' }}
            />
            {/* Use the ProductsStack here for the "Products" tab */}
            <Tab.Screen
                name="ProductsTab" // Updated name
                component={ProductsStack} // Use the ProductsStack
                options={{ title: 'Products' }} // Label for the tab bar
            />
            <Tab.Screen
                name="Counter"
                component={CounterScreen}
                options={{ title: 'Counter' }}
            />
        </Tab.Navigator>
    );
};

export default AppTabsNavigator;