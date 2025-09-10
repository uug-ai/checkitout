import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './plugin' 
import { useEffect } from 'react'
import { initPlugin } from './plugin'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => { initPlugin() }, [])
  
  return (
    <>
      <div className="App">
        <h1>Checkout Plugin Dev Playground</h1>
        <p>Click the button to open the modal.</p>
        <button className="checkout-plugin">Open Modal</button>
      </div>
    </>
  )
}

export default App
