import { useState, useCallback, useEffect, useRef} from 'react'
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

  // Function to copy the generated password to clipboard
  //We can use Usecallback here as well, but it's not necessary since it doesn't have dependencies.
  const copyToClipboard = () => {
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password);
  };

  //UseEffect hook to perform side effects in function components
  //It has 2 parameters: a function to run and an array of dependencies
  // Generate password whenever dependencies change
  useEffect(()=>{
    passwordGenerator();
  }, [passlen, nums, spec, passwordGenerator]);


//UseRef hook to create a reference to the password input field
// It allows direct access to a DOM element
//we created a reference called passwordRef and assigned it to the input field in the JSX
  const passwordRef = useRef(null);


  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-white-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-gray-700">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 text-red-500 bg-gray-700"
          placeholder="Password"
          readOnly
          ref={passwordRef}
          
        />
        <button
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyToClipboard}
        >copy</button>
      </div>
      <div className='flex text-sm gap-x-2 h-20'>
        <div className='flex items-center gap-x-1'>
          <input 
            type="range"
            min={8}
            max={100}
            value={passlen}
            className='cursor-pointer w-32 accent-blue-600 hover:accent-blue-800'
            onChange={(e) => {setPasslen(e.target.value)}}
          />
          <label>Length: {passlen}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              className='accent-yellow-500 hover:accent-yellow-600 h-5 w-5'
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
              className='accent-green-500 hover:accent-green-600 h-5 w-5'
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
