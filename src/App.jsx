import { useState } from 'react'
import './App.css'
import NavBar from './components/Navbar'
import Banner from './components/Banner'
import Skills from './components/Skills'
import Project from './components/Project'
import 'bootstrap/dist/css/bootstrap.min.css' 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>

      <BrowserRouter>
        <NavBar />
        <Banner />
        <Skills />
        <Project/>
    </BrowserRouter>
    </>
  )
}

export default App
