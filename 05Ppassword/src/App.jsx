/* eslint-disable no-unused-vars */
import { useState , useCallback } from 'react'
import './App.css'

function App() {
  const [length,setLength]=useState(8);
  const [isNum,setIsNum]=useState(true);
  const [isChar,setIsChar]=useState(true);
  const [password,setPassword]=useState("");

  const passwordGenerator = useCallback(() => {
    let pass="";
    let string="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(isNum) string+="0123456789";
    if(isChar) string+="!@#$%^&*(){}-";

    for (let i = 1; i <= string.length; i++) {
      let randomCharIndex = Math.floor(Math.random()*string.length()+1);
      pass=string.charAt(randomCharIndex);
    }

    setPassword(pass);

  },[length,isNum,isChar,setPassword]);
  
  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md text-center
    rounded-lg px-4 my-8 text-orange-400 bg-gray-700"> 
    <h1 className="text-4xl text-center text-white">Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text" 
        value={password} 
        className='outline-none w-full py-1 px-3 my-3'
        placeholder='Enter password'
        readOnly />
        <button
          className='outline-none bg-blue-400 text-white px-3 py-0.5 shrink-0'
        >Copy</button>
      </div>
    </div>
    </>
  )
}

export default App
