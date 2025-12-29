import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
    todos: [
       { id: Date.now(),
        text: "Sample Todo",
        completed: false}
    ],
};

// Creating a Redux slice for todo management
//It has 3 main parts:
// 1. Name of the slice: "todo"
// 2. Initial state: an object with an empty array of todos
// 3. Reducers: functions to handle adding and removing todos

const todoSlice =createSlice({
    name: "todo",
    initialState, // { todos: [] }
    reducers:{

        // Reducer to add a new todo
        // action.payload contains the new todo item
        // state is mutable here due to Immer library used by Redux Toolkit
        addTodo: (state, action)=>{
            state.todos.push(action.payload);
        },

        removeTodo: (state, action)=>{
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload
            );
        },

        toggleTodo: (state, action)=>{
            const todo = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    todo.completed = !todo.completed;
                }
                return todo;
            });
        },
        
        editTodo: (state, action)=>{
            const { id, text } = action.payload;

            const todo = state.todos.find((todo) => todo.id === id);
            if (todo) {
                todo.text = text;
            }
        }
    }
})


// Exporting the actions and reducer for use in the store and components

// addTodo and removeTodo actions will be dispatched from components
export const { addTodo, removeTodo, editTodo, toggleTodo } =todoSlice.actions;

// The reducer will be added to the Redux store
export default todoSlice.reducer;



// The todoSlice.js file defines a Redux slice for managing a to-do list using Redux Toolkit.
// It includes the initial state with an empty array of to-dos and two reducers: addTodo and removeTodo.
// The addTodo reducer adds a new to-do item to the list, while the removeTodo reducer removes a to-do item by its index.
// The slice's actions and reducer are exported for use in the Redux store and React components.