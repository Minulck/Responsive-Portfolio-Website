import { useState } from 'react'
import './App.css'
import NavBar from './components/Navbar'
import Banner from './components/Banner'
import 'bootstrap/dist/css/bootstrap.min.css' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Banner/>
    </>
  )
}

export default App
