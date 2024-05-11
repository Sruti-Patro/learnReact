// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Card from "./components/Card";

function App() {
  // const [count, setCount] = useState(0)
  //let arr=[1,2,3,4], obj={name:"name,keyz:22"};
  return (
    <>
      <h1 className="text-3xl font-bold underline bg-blue-300 p-5 rounded-3xl mb-10">
        LOOPLI's Reign
      </h1>
      <Card messages="hi guyzz" newss="kyun hai yeah" />
      <Card meassage="hello" />
      <Card />
      {/* <Card channel="hiiiiiiii guyzzzz" arr=[1,2,3,4] obj={name:"name,keyz:22"}/> x */}
      {/* <Card message="hiiiiiiii guyzzzz" somObj={obj} somArr={arr}/>  */}
      {/* <Card/> */}
    </>
  );
}

export default App;
