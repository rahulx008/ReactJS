import { useState } from 'react'
import './App.css'
import useCurrency from '../hooks/UseCurrency'
import Input from '../components/Input.jsx'


function App() {
  const [count, setCount] = useState(0)
  const [selectedCurrency, setSelectedCurrency] = useState('INR');
  const [toSelectedCurrency, setToSelectedCurrency] = useState('USD');
  
  let data = useCurrency(selectedCurrency);
  console.log(data[toSelectedCurrency]);
  
  return (
    <div className="App"
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', 
          justifyContent: 'center', width: '100vw', height: '100vh',
          backgroundImage: 'url(../src/assets/background.jpg)'}}>
      <h1 className="text-3xl font-bold underline text-red-600">
        Currency Convertor
      </h1>
      <br />
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
          onChange={(e)=>setCount(e.target.value)}
          selectedCurrency={selectedCurrency}
          setSelectedCurrency={setToSelectedCurrency}
          value={count * data[toSelectedCurrency] || 0}
          disabled ={true}
        />

      </div>
    </div>
  )
}

export default App
