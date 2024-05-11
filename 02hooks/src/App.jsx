import { useState } from 'react'
import './App.css'

function App() {

let [counter,setCounter] = useState(0)

  // let counter = 0;
  const addValue = () => {
    // console.log("value nn", Math.random());
    // counter++;
    // console.log('clicked', counter);
    if (counter<20 && counter>=0) {
      setCounter(counter+1)
    }
  }
  
  const decValue = () => {
    if (counter<21 && counter>=1) {
      setCounter(counter-1)
    }
  }
  return (
    <>
      <h1>LOOPLI</h1>
      <h3>Counter value : {counter}</h3>
      <button onClick={addValue} disabled={counter >= 20}>+</button>
      <br></br>
      <br></br>
      <button onClick={decValue} disabled={counter <= 0}>-</button>
    </>
  )
}

export default App
