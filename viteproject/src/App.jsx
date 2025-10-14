//hook example
//we have several popular hooks in react
//useState, useEffect, useContext, useReducer, useRef

//we will see useState here
import { useState } from 'react'
import './App.css'

function App() {

  // As we are using useState, we need to import it from react
  // useState returns an array with 2 values: 
  // 1- value is the current state (counter)
  // 2- value is a function that updates the state (setCounter)
  // We can use array destructuring to get these two values
  // We can also provide an initial value to the state (10 in this case)
  let [counter, setCounter] = useState(10);
  const addNumber=()=>{
    console.log("Increased", counter, Date.now());
    setCounter(counter+1);
  }
  const removeNumber=()=>{
    console.log("Decreased", counter, Date.now())
    setCounter(counter-1);
  }
  

  return (
    <>
      <h1>Basic Counter App</h1>
      <h2> Counter Value: {counter} </h2>

      <button onClick={addNumber}>Increase counter {counter} </button>

      <button onClick={removeNumber}>Decrease counter {counter} </button>
    </>
  )
}

export default App
