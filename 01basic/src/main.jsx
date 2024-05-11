// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// function MyApp() {
//     return(
//         <>
//             <h1>Sruti Patro | CST | 2nd year</h1>
//         </>
//     )
// }

// const reactElement = {
//     type:'a',
//     props:{
//         href: 'https://googlecom',
//         target:'_blank'
//     },
//     children:'Click me to visit Google'
// }

// const anotherElement = (
//     <a href='https://googole.com' target='_blank'>Click to visit Google</a>
// )

// const anotheruser = " | Hello guyzzzzz"

// const elementReact = React.createElement(
//     'a',
//     {
//         href:'https://google.com',
//         target:'_blank'
//     },
//     'Google link',
//     anotheruser
// )

//Babel- a transpiler injects the react code and tanslates it into a
// html code just like we customised it in the custom app

ReactDOM.createRoot(document.getElementById('root')).render(
    <App/>
    // <MyApp />
    // MyApp() 
    // <reactElement/> x
    // reactElement() x
    // reactElement x
    // anotherElement
    // anotherElement() x
    // elementReact
)
