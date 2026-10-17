
import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home-page'>

      <section className='hero'>
       

        <h1>Discover Your Favorite Recipe!</h1>

        <Link to='/meals' className='primary-button'> Explore Recipes  </Link>
         
      </section>

      <section className='quick-search'>
        <h2>What would you like to cook?</h2>
        <p>Start exploring with these popular searches.</p>

        <div className='quick-links'>
          <Link to='/meals?search=chicken'>Chicken</Link>
          <Link to='/meals?search=pasta'>Pasta</Link>
          <Link to='/meals?search=cake'>Cake</Link>
        </div>
      </section>


    </div>
  )
}

export default Home
