import { useState, useEffect } from 'react'
import './App.css'
import { ToDoProvider } from './contexts';
import TodoForm from './components/ToDoForm';
import TodoItem from './components/ToDoItems';

function App() {
  const [todos, setTodos] = useState([]);

  const addToDo= (title) => {
    const newToDo = {
      id: Date.now(),
      title,
      completed: false
    };
    setTodos([newToDo, ...todos]);
  }

  const updateToDo = (id, title) => {
    setTodos(todos.map((todo)=>todo.id === id ? {...todo, title} : todo));
    // We may write 'title' instead of "title: title" because name & variable name is same.
  }

  const removeToDo =(id)=>{
    setTodos(todos.filter((todo)=>todo.id!==id))
  }

  const toggleToDo =(id)=>{
    setTodos((prev) => 
      prev.map((prevToDo)=>
        prevToDo.id===id ? {...prevToDo, 
        completed: !prevToDo.completed}: prevToDo))
    
  }

  

  useEffect(()=>{
    const storedTodos= JSON.parse(localStorage.getItem("todos"));
    if(storedTodos&& storedTodos.length>0){
      setTodos(storedTodos);
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <ToDoProvider value={{todos, addToDo, updateToDo, removeToDo, toggleToDo}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-none mx-0 shadow-md rounded-lg px-4 py-3 text-white ">
                    <h1 className="w-full text-2xl font-bold text-center mb-8 mt-2">To-Do Application</h1>
                    <div className="mb-4 w-full">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                            <div key={todo.id} 
                            className='w-full'>
                              <TodoItem todo={todo}/>
                            </div>
                          )
                        )}
                    </div>
                </div>
            </div>
    </ToDoProvider>
  )
}

export default App
