import { configureStore } from '@reduxjs/toolkit';

// Importing reducers from feature slices
import counterReducer from '../features/counter/counterSlice';
import todoReducer from '../features/todo/todoSlice';


// Configuring the Redux store with the imported reducers
export const store =configureStore({
    reducer:{
        counter: counterReducer,
        todo: todoReducer,
    },
});

// The store.js file is the central hub for managing the application's state using Redux Toolkit.
// It imports the necessary reducers from different feature slices (counterSlice and todoSlice)
// and combines them into a single root reducer using configureStore.
// This store is then provided to the entire React application using the Provider component
// in the App.jsx file, allowing components to access and interact with the global state.
