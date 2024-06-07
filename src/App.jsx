import { useState } from 'react'
import Navtop from './Components/Navtop'
import './App.css'
import Hero from './Components/Hero'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Profile from './Components/Profile'
import Product from './Components/Product'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <>
        <Navtop />
        
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path="/profile1" element={<Profile />} />
          <Route path="/product1" element={<Product />} />
        </Routes>
      </>
    </BrowserRouter>
  )
}

export default App
