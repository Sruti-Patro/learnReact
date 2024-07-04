import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import React from 'react';
import App from './App';
import { About, Contact, Github, Home, User } from './components/Index';

// const router=createBrowserRouter([
//   {
//     path:'/',
//     element: <App/>,
//     children:[
//       {
//         path:'/',
//         element: <Home/>,
//       },
//       {
//         path:'/about',
//         element: <About/>,
//       },
//       {
//         path:'/contact',
//         element: <Contact/>,
//       }
//     ]
//   }])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/github' element={<Github/>} />
      <Route path='/user/:userid' element={<User/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
