import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '../hooks/UseCurrency'
import useCurrency from '../hooks/UseCurrency'


function App() {
  const [count, setCount] = useState(0)
  const data = useCurrency();
  console.log(data);
  
  return (
    <>
    <h1 className="text-3xl font-bold underline text-red-600">
      Hello world!
    </h1>
    </>
  )
}

export default App
