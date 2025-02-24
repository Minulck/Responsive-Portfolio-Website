import { useState } from 'react'
import './App.css'
import NavBar from './components/Navbar'
import Banner from './components/Banner'
import 'bootstrap/dist/css/bootstrap.min.css' 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Banner/>} />
          <Route path="/Skills" element={<Banner/>} />
          <Route path="/projects" element={<Banner/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
