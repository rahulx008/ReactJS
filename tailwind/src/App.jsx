import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* here is the heading in which i have used tailwind css */}
      <h1 className="text-3xl font-bold bg-blue-500 text-white p-4 rounded-lg">Rahul Gupta</h1>
    </>
  )
}

export default App
