// src/navigation/ProductsStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductsScreen from '../screens/App/ProductsScreen'; // This will be the list screen
import { useTheme } from 'react-native-paper'; // Use Paper theme

const Stack = createNativeStackNavigator();

const ProductsStack = () => {
    const theme = useTheme();

    return (
        <Stack.Navigator
            screenOptions={{
                 headerStyle: {
                     backgroundColor: theme.colors.primaryContainer,
                 },
                 headerTintColor: theme.colors.onPrimaryContainer,
                 headerBackTitleVisible: false, // Often preferred on Android
            }}
        >
            {/* The list screen is the initial screen in this stack */}
            <Stack.Screen
                name="ProductsList"
                component={ProductsScreen}
                options={{ title: 'Products' }} // Header title for the list screen
            />
            {/* The detail screen */}
           
        </Stack.Navigator>
    );
};

export default ProductsStack;