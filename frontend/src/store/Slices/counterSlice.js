
// src/store/slices/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Define the initial state for the counter
const initialState = {
  value: 0, // The counter value starts at 0
};

// Create the counter slice using createSlice
const counterSlice = createSlice({
  name: 'counter', // This will be used as the prefix for action types (e.g., 'counter/increment')
  initialState,   // The initial state defined above
  reducers: {
    // Reducer to increment the counter value
    increment: (state) => {
      // Immer allows us to "mutate" the state directly,
      // but it actually creates a new immutable state behind the scenes.
      state.value += 1;
    },
    // Reducer to decrement the counter value
    decrement: (state) => {
      state.value -= 1;
    },
    // Reducer to increment the counter by a specific amount
    incrementByAmount: (state, action) => {
      // The payload of the action will be the amount to increment by
      state.value += action.payload;
    },
    // Reducer to reset the counter value to 0
    reset: (state) => {
        state.value = 0;
    },
     // You could add other reducers here if needed
  },
  // extraReducers are used for handling actions from other slices or thunks
  // We don't need any extraReducers for this simple counter
});

// Export the auto-generated action creators
export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions;

// Export the reducer function
export default counterSlice.reducer;