import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar: React.FC = () => {
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="festival-name">DREAMLAND</span>
          <span className="festival-year">2025</span>
        </Link>
        
        <div className="navbar-menu">
          <Link 
            to="/" 
            className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            HOME
          </Link>
          <Link 
            to="/shop" 
            className={`navbar-link ${location.pathname === '/shop' ? 'active' : ''}`}
          >
            TICKETS
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
