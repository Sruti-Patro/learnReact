
import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor]=useState('cadetblue');
  return (
    <>
      <div className="w-full h-screen duration-200"
      style={
        {
          backgroundColor:color
        }
      }
      >
        <div className="fixed flex flex-wrap justify-center m-12 left-20">
          <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white m-20 rounded-xl px-5 py-3">
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
            style={{backgroundColor:"red"}}
            onClick={()=>{setColor("red")}}
            >Red</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
            style={{backgroundColor:"green"}}
            onClick={()=>{setColor("green")}}
            >Green</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
            style={{backgroundColor:"lavender"}}
            onClick={()=>{setColor("lavender")}}
            >Lavender</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
            style={{backgroundColor:"cadetblue"}}
            onClick={()=>{setColor("cadetblue")}}
            >CadetBlue</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
            style={{backgroundColor:"olive"}}
            onClick={()=>{setColor("olive")}}
            >Olive</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
            style={{backgroundColor:"pink"}}
            onClick={()=>{setColor("pink")}}
            >Pink</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
            style={{backgroundColor:"black"}}
            onClick={()=>{setColor("black")}}
            >black</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
            style={{backgroundColor:"brown"}}
            onClick={()=>{setColor("brown")}}
            >Brown</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
            style={{backgroundColor:"burlywood"}}
            onClick={()=>{setColor("burlywood")}}
            >burylwood</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
