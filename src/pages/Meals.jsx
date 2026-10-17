
import React, { useEffect, useState } from 'react'
import './Meals.css'
import { Link, useSearchParams } from 'react-router-dom'

function Meals() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialSearch = searchParams.get('search') || ''

  const [search, setSearch] = useState(initialSearch)
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setSearch(initialSearch)
  }, [initialSearch])

  useEffect(() => {
    const query = searchParams.get('search') || ''

    if (!query.trim()) {
      setMeals([])
      setLoading(false)
      setError('')
      return
    }

    const controller = new AbortController()

    async function fetchMeals() {
      setLoading(true)
      setError('')

      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`,
          { signal: controller.signal }
        )

        if (!response.ok) {
          throw new Error('Unable to fetch recipes. Please try again.')
        }

        const data = await response.json()
        setMeals(data.meals || [])
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError('Unable to load recipes. Please try again.')
          setMeals([])
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    fetchMeals()

    return () => controller.abort()
  }, [searchParams])

  function handleSearch(event) {
    event.preventDefault()

    const query = search.trim()

    if (query) {
      setSearchParams({ search: query })
    } else {
      setSearchParams({})
    }
  }

  return (
    <div className='meals-page'>
      <section className='page-heading'>
        <p className='eyebrow'>EXPLORE OUR COLLECTION</p>
        <h1>Find Your Recipe</h1>
        <p>Search for your favourite meals and discover something new.</p>
      </section>

      <form className='search-form' onSubmit={handleSearch}>
        <input
          type='text'
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder='Search chicken, pasta, cake...'
          aria-label='Search recipes'
        />

        <button type='submit'>Search</button>
      </form>

      {loading && <p className='status-message'>Loading recipes...</p>}

      {error && <p className='status-message error'>{error}</p>}

      {!loading && !error && searchParams.get('search') && meals.length === 0 && (
        <p className='status-message'>
          No recipes found. Try searching for another meal.
        </p>
      )}

      {!searchParams.get('search') && (
        <p className='status-message'>
          Enter a recipe name above to get started.
        </p>
      )}

      <div className='meal-grid'>
        {meals.map((meal) => (
          <Link
            to={`/meal/${meal.idMeal}`}
            className='meal-card'
            key={meal.idMeal}
          >
            <img src={meal.strMealThumb} alt={meal.strMeal} />

            <div className='meal-card-content'>
              <h2>{meal.strMeal}</h2>

              <p>
                {meal.strCategory || 'Recipe'}
                {meal.strArea ? ` · ${meal.strArea}` : ''}
              </p>

              <span className='card-link'>View Recipe →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Meals
