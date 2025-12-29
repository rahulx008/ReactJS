import React from "react";
import { useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import { addTodo, removeTodo, editTodo,toggleTodo } from "../features/todo/todoSlice";

function TodoForm() {
    const [text, setText]=useState("")
    const dispatch = useDispatch();

    const add=(e)=>{
        e.preventDefault();
        if(!text) return
        dispatch(addTodo({
            id: Date.now(),
            text,
            completed: false,
        }));
        setText("");
    }

    return (
        <form  onSubmit={add} className="flex w-full ">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full max-w-none border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                onChange={(e)=>setText(e.target.value)}
                value={text}   
                
            />
            <button type="submit"
                
                className="rounded-r-lg px-3 py-1 bg-green-500 text-green shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

