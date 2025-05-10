// src/screens/App/CounterScreen.js
import React, { useState } from 'react'; // Import useState for local input state
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'; // Import KeyboardAvoidingView
import { Text, Button, Title, useTheme, TextInput, Surface, IconButton } from 'react-native-paper'; // Import Paper components
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch and useSelector hooks
// Import the action creators from the counter slice
import { increment, decrement, incrementByAmount, reset } from '../../store/Slices/counterSlice';

const CounterScreen = () => {
  // Use useSelector to read the current value from the Redux store
  // The state is structured as store.counter because of the reducer name in index.js
  const count = useSelector((state) => state.counter.value);
  // Use useDispatch to get the dispatch function
  const dispatch = useDispatch();
  const theme = useTheme(); // Get theme for styling

  // Local state for the increment by amount input
  const [incrementAmount, setIncrementAmount] = useState('5'); // Default value is 5

  // Function to handle increment by amount
  const handleIncrementByAmount = () => {
    // Convert the input string to a number
    const amount = Number(incrementAmount) || 0; // Default to 0 if input is not a valid number
    // Dispatch the incrementByAmount action with the numeric payload
    dispatch(incrementByAmount(amount));
  };


  return (
    // KeyboardAvoidingView helps manage keyboard input visibility
    <KeyboardAvoidingView
        style={[styles.container, { backgroundColor: theme.colors.background }]}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0} // Adjust offset if you have a header
    >
        <Title style={styles.title}>Counter App (Redux Toolkit)</Title>

        <Surface style={styles.surface} elevation={2}>
             {/* Display the current counter value */}
             <Text variant="displayLarge" style={styles.counterValue}>{count}</Text>
        </Surface>


        <View style={styles.buttonRow}>
            {/* Button to dispatch the increment action */}
            <Button
                mode="contained"
                onPress={() => dispatch(increment())} // Dispatch the increment action
                style={styles.button}
                labelStyle={styles.buttonLabel}
            >
                Increment
            </Button>
             {/* Button to dispatch the decrement action */}
            <Button
                mode="contained"
                onPress={() => dispatch(decrement())} // Dispatch the decrement action
                style={[styles.button, { backgroundColor: theme.colors.error }]} // Example: use error color for decrement
                 labelStyle={styles.buttonLabel}
            >
                Decrement
            </Button>
        </View>

        <View style={styles.buttonRow}>
            {/* Input for increment amount */}
            <TextInput
                label="Amount"
                value={incrementAmount}
                onChangeText={setIncrementAmount}
                keyboardType="number-pad" // Numeric keyboard
                mode="outlined"
                dense // Smaller input
                style={styles.amountInput}
            />
             {/* Button to dispatch incrementByAmount action */}
            <Button
                mode="outlined" // Use outlined for secondary action
                onPress={handleIncrementByAmount} // Call local handler
                style={[styles.button, styles.amountButton]}
                 labelStyle={styles.buttonLabel}
            >
                Add Amount
            </Button>
        </View>

         {/* Button to reset the counter */}
         <View style={styles.resetButtonContainer}>
             <Button
                 mode="text" // Use text style for reset
                 onPress={() => dispatch(reset())} // Dispatch the reset action
                 color={theme.colors.onSurfaceVariant} // Color from theme
             >
                 Reset
             </Button>
         </View>


    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
   title: {
       fontSize: 28,
       marginBottom: 30,
       textAlign: 'center',
   },
    surface: {
        padding: 20,
        borderRadius: 10,
        marginBottom: 30, // Space below the counter value display
        alignItems: 'center', // Center value inside Surface
    },
   counterValue: {
       fontSize: 80, // Large font size for the count
       fontWeight: 'bold',
       color: '#333', // Dark color for text (adjust with theme)
       // Consider using theme.colors.onSurface if appropriate
   },
   buttonRow: {
       flexDirection: 'row', // Arrange buttons horizontally
       justifyContent: 'space-around', // Space them out
       width: '100%', // Take full width
       marginBottom: 20, // Space below the row
   },
   button: {
       flex: 1, // Distribute space evenly
       marginHorizontal: 5, // Space between buttons
       paddingVertical: 10, // Add vertical padding
   },
    buttonLabel: {
        fontSize: 16, // Adjust label font size
    },
    amountInput: {
       flex: 0.6, // Input takes 60% width
       marginRight: 10,
        height: 50, // Explicit height for input consistency
    },
    amountButton: {
       flex: 0.4, // Button takes 40% width
       justifyContent: 'center', // Center text/spinner vertically
    },
     resetButtonContainer: {
         marginTop: 10, // Space above the reset button
     }
});

export default CounterScreen;