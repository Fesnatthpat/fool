// import { useState } from 'react'
import Navtop from './Components/Navtop'
import './App.css'
import Hero from './Components/Hero'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Profile from './Components/Profile'
import Product from './Components/Product'
import Footer from './Components/Footer'
import Login from './Components/Login'
import Register from './Components/Register'
import Items_Product from './Components/Items_Product'
import From_pd from './Components/From_pd'

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
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/item_product" element={<Items_Product />} />
          <Route path="/from_pd" element={<From_pd />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  )
}

export default App
