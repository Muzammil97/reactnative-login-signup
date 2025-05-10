
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Slices/counterSlice'; // <-- Import the counter reducer


const store = configureStore({
  reducer: {
    counter: counterReducer, // <-- Add the counter reducer
  },

});

export default store;