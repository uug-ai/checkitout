import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const basename = import.meta.env.PROD ? '/checkitout' : '';
  
  return (
    <Router basename={basename}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
