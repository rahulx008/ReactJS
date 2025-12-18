

import { useContext, createContext } from "react";

export const ToDoContext = createContext({
    toDos: [

    ],
    addToDo: (title) => {},
    updateToDo: (id, title) => {},
    removeToDo: (id) => {},
    toggleToDo: (id) => {}
});

export const useToDo =()=>{
    return useContext(ToDoContext);
}

export const ToDoProvider = ToDoContext.Provider;
