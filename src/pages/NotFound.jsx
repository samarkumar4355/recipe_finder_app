
import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
  return (
    <div className='not-found'>
      <p className='eyebrow'>404 ERROR</p>
      <h1>Page Not Found</h1>
      <p>Sorry, we couldn't find the page you're looking for.</p>

      <Link to='/' className='primary-button'>
        Go Home
      </Link>
    </div>
  )
}

export default NotFound
