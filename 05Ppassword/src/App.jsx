/* eslint-disable no-unused-vars */
import { useState , useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length,setLength]=useState(8);
  const [isNums,setIsNum]=useState(false);
  const [isChars,setIsChar]=useState(false);
  const [password,setPassword]=useState("");

  const passwordRef=useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass="";
    let string="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(isNums) string+="0123456789";
    if(isChars) string+="!@#$%^&*(){}-";

    for (let i = 1; i <= length; i++) {
      // console.log(string.length);
      let randomCharIndex = Math.floor(Math.random()*string.length+1);
      pass+=string.charAt(randomCharIndex);
    }
    setPassword(pass);
  },[length , isNums , isChars , setPassword]);
  
  /*useEffect(()=>{
    functions to call
  },[dependencies on which the above functions are to be called, on change of these variables or staes they are supposed to be calle d again])
  */

  useEffect(()=>{
    passwordGenerator();
  },[length ,isNums, isChars,passwordGenerator])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select(); //to highlight when copy action takes place
    // passwordRef.current?.setSelectionRange(0,8);
    window.navigator.clipboard.writeText(password)
  },[password]);

  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md text-center
    rounded-lg px-4 my-8 text-orange-400 bg-gray-700"> 
    <h1 className="text-4xl text-center text-white">Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white mt-3 p-1'>
        <input 
        type="text" 
        value={password} 
        className='outline-none w-full py-1 px-3 my-3'
        placeholder='Enter password'
        readOnly 
        ref={passwordRef}/>
        <button
        onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-400 text-white px-3 py-0.5 shrink-0 rounded-md'
        >Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1 mb-2'>
          <input type="range"  max={100} min={8} value={length}
          className='cursor-pointer' 
          onChange={(e)=>{setLength(e.target.value)}}/>
          <label >length : {length}</label>
        </div>
        <div className='flex items-center gap-x-1 mb-2'>
          <input type="checkbox" 
                 defaultChecked={isNums}
                 id="numberInput"
                 onChange={()=>{
                  setIsNum((prev)=> !prev);
                 }}
          />
          <label htmlFor="numberInput">Numbers</label>
          <input type="checkbox" 
                 defaultChecked={isChars}
                 id="characterInput"
                 onChange={()=>{
                  setIsChar((prev)=> !prev);
                 }}
          />
          <label htmlFor="characterInput">Special Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
