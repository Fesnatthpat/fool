import { useState } from 'react'
import Navtop from './Components/Navtop'
import './App.css'
import Hero from './Components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navtop />
      <Hero />
    </>
  )
}

export default App
