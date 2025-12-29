import './App.css';
import { Provider, useSelector } from 'react-redux'; 


import Counter from './components/counter';
import TodoForm from './components/TodoForm';
import TodoItem from './components/todoItems';

function App() {
   const todos = useSelector((state) => state.todo.todos);
  
  return (
    <>
      <div>
      <Counter />
      </div>  
      

      <div className="my-8 border border-green-300 p-6 rounded-lg">
        <h1 className="w-full text-2xl font-bold text-center mb-8 mt-2">To-Do Application</h1>
          
        {/* Todo form goes here */} 
        <TodoForm/>
        <br/>


        <div className="flex flex-wrap gap-y-3">
          {/*Loop and Add TodoItem here */}
          {todos.map((todo)=>(
          <div key={todo.id} className='w-full'>
          <TodoItem todo={todo}/>
          </div>
          ))}
        </div>
      </div>
          
          
    </>
  );
}

export default App;
