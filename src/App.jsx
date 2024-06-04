import { useState } from 'react'
import Navtop from './Components/Navtop'
import './App.css'
import Hero from './Components/Hero'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <>
        <Navtop />
        <Routes>
          {/* <Route path='/' element={<Navtop />} /> */}
          <Route path='/' element={<Hero />} />
        </Routes>
      </>
    </BrowserRouter>
  )
}

export default App
