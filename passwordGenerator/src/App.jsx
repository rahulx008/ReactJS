import { useState, useCallback, useEffect} from 'react'
import './App.css'


// Password Generator App Component
// We used 3 hooks here: useState, useCallback and useEffect
// useState to manage the state of password, password length, inclusion of numbers and special characters
// useCallback to memoize the password generation function to avoid unnecessary re-creations
// useEffect to trigger password generation whenever the dependencies change

function App() {

  //UseState hooks to manage state variables
  // It has 2 parameters: initial state and a function to update the state
  const [password, setPassword] = useState('');
  const [passlen, setPasslen] = useState(8);
  const [nums, setNums] = useState(false);
  const [spec, setSpec] = useState(false);

//UseCallback hook to memoize the password generation function
// It only re-creates the function when its dependencies change
//it has 2 parameters: a function and an array of dependencies
  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if(nums) str+="0123456789";
  
    if(spec) str+="!@#$%^&*()_+{}[]:';/\\";

    for(let i=0; i<passlen; i++){
      let randomnum = Math.floor(Math.random()*str.length +1);
      pass += str.charAt(randomnum);
    }
    setPassword(pass);
  
  }, [passlen, nums, spec]);

  
  //It has 2 parameters: a function to run and an array of dependencies
  // Generate password whenever dependencies change
  useEffect(()=>{
    passwordGenerator();
  }, [passlen, nums, spec, passwordGenerator]);


  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-white-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-gray-700">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 text-white"
          placeholder="Password"
          readOnly
          
        />
        <button
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
            type="range"
            min={8}
            max={100}
            value={passlen}
            className='cursor-pointer w-32'
            onChange={(e) => {setPasslen(e.target.value)}}
          />
          <label>Length: {passlen}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={nums}
              id="numberInput"
              onChange={() => {
                  setNums((prev) => !prev);
              }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={spec}
              id="characterInput"
              onChange={() => {
                  setSpec((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div> 
    </div>
    </>
  )
}

export default App
