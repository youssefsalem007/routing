import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Navbar from './Components/navbar/Navbar'
import Footer from './Components/footer/Footer'
import Home from './Components/home/Home'
import About from './Components/about/About'
import Contact from './Components/contact/Contact';
import Portfolio from './Components/portfolio/Portfolio';
import Layout from './Components/layout/Layout';

function App() {
 const router  = createBrowserRouter([
    {path:"", element: <Layout /> ,
      children: [  
    {index:true, element: <Home />},
    {path:"about", element: <About />},
    {path:"contact", element: <Contact />},
    {path:"portfolio", element: <Portfolio />},
    {path:"*", element: <h2>ERROR</h2>},
    ]
    },
  
    
  ])
  

  return (
    <>
    <RouterProvider router = {router} />
    

    
   
    
    
    
      
    </>
  )
}

export default App
