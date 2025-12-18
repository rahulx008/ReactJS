import React from "react";
import { useToDo } from "../contexts";
import { useState } from "react";

function TodoForm() {
    const [title, setTitle]=useState("");
    const {addToDo} = useToDo();

    const add=(e)=>{
        e.preventDefault();
        if(!title) return
        addToDo(title);
        setTitle("");
    }

    return (
        <form  onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                onChange={(e)=>setTitle(e.target.value)}
                value={title}   
                
            />
            <button type="submit"
                
                className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                
            </button>
        </form>
    );
}

export default TodoForm;

