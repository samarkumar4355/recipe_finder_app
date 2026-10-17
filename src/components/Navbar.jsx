
import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>
      <Link to='/' className='brand'>
        Recipe Finder
      </Link>

      <div className='nav-links'>
        <Link to='/'>Home</Link>
        <Link to='/meals'>Find Recipes</Link>
      </div>
    </nav>
  )
}

export default Navbar
