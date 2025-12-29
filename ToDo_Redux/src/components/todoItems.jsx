import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleTodo, editTodo } from "../features/todo/todoSlice";
import toneComp from "../assets/completed.wav";
import toneDel from "../assets/Delete.wav";

function TodoItem({ todo }) {
    const completeTone = new Audio(toneComp);
    const deleteTone = new Audio(toneDel);
    completeTone.preload = 'auto';
    deleteTone.preload = 'auto';

   
    const [isTodoEditable, setIsTodoEditable]=useState(false);
    const [todoMsg, setTodoMsg] =useState(todo.text);

    // Keep original to support cancel
    const originalTextRef = todo.text;

    const dispatch = useDispatch();
    

    const handleUpdate=()=>{
        dispatch(editTodo(todo.id, todoMsg));
        setIsTodoEditable(false);
    }

    const handleRemove=()=>{
        dispatch(removeTodo(todo.id))
    }

    const handleToggle=()=>{
        dispatch(toggleTodo(todo.id))
        if(!todo.completed){
            completeTone.play().catch((error)=>console.log("Audio play error:", error));
        }
        
    }

    return (
        <div
            className={`flex border w-full h-max border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black 
                ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}
        >
            {/* <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={handleToggle}
            /> */}
            <button
                className="inline-flex  rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    handleToggle();
                }}
                
            >
                {!todo.completed ? "⌛" : "✔️"}
            </button>

            <input
                type="text"
                className={`flex-1 min-w-0 outline-none rounded-md transition-all duration-150 ${
                    isTodoEditable
                        ? 'border border-gray-300 bg-white px-3 py-2 shadow-sm'
                        : 'bg-transparent border-0 px-0 py-0'
                } ${todo.completed ? 'line-through text-gray-600' : 'text-black'}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && isTodoEditable) handleUpdate();
                    if (e.key === 'Escape' && isTodoEditable) {
                        setTodoMsg(originalTextRef);
                        setIsTodoEditable(false);
                    }
                }}
            />
            

            {/* Edit, Save Button */}
            {/* Edit / Save / Cancel Buttons */}
            {!isTodoEditable ? (
                <button
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-sm border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-50"
                    onClick={() => setIsTodoEditable(true)}
                    disabled={todo.completed}
                    aria-label="Edit todo"
                >
                    ✏️ <span className="hidden sm:inline">Edit</span>
                </button>
            ) : (
                <div className="inline-flex items-center gap-2">
                    <button
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-sm border border-green-200 bg-green-50 hover:bg-green-100"
                        onClick={handleUpdate}
                        aria-label="Save todo"
                    >
                        ✅ <span className="hidden sm:inline">Save</span>
                    </button>
                    <button
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-sm border border-gray-200 bg-white hover:bg-gray-50"
                        onClick={() => {
                            setTodoMsg(originalTextRef);
                            setIsTodoEditable(false);
                        }}
                        aria-label="Cancel edit"
                    >
                        ✖️ <span className="hidden sm:inline">Cancel</span>
                    </button>
                </div>
            )}

            {/* Delete Todo Button */}
            <button
                className="inline-flex rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() =>{
                    handleRemove();
                    deleteTone.play().catch((error)=>console.log("Audio play error:", error));
                }}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
