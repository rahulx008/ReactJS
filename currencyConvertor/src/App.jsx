import { useState } from 'react'
import './App.css'
import useCurrency from '../hooks/UseCurrency'
import Input from '../components/Input.jsx'


function App() {
  const [count, setCount] = useState(0)
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  let data = useCurrency(selectedCurrency);
  console.log(data);
  
  return (
    <>
      <h1 className="text-3xl font-bold underline text-red-600">
        Hello world!
      </h1>
      <div>
        <Input
          label="From"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          selectedCurrency={selectedCurrency}
          setSelectedCurrency={setSelectedCurrency}
        />
        <Input
          label="To"
          value={count * data.rates[selectedCurrency] || 0}
          disabled ={true}
        />
      </div>
    </>
  )
}

export default App
