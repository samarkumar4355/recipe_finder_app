
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './MealDetails.css'

function MealDetails() {
  const { id } = useParams()

  const [meal, setMeal] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function fetchMeal() {
      setLoading(true)
      setError('')
      setMeal(null)

      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
          { signal: controller.signal }
        )

        if (!response.ok) {
          throw new Error('Unable to fetch recipe details.')
        }

        const data = await response.json()

        if (data.meals && data.meals.length > 0) {
          setMeal(data.meals[0])
        } else {
          setError('Recipe not found.')
        }
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError('Unable to load recipe details. Please try again.')
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    fetchMeal()

    return () => controller.abort()
  }, [id])

  if (loading) {
    return <p className='status-message'>Loading recipe details...</p>
  }

  if (error || !meal) {
    return (
      <div className='status-message'>
        <h2>{error || 'Recipe not found.'}</h2>
        <Link to='/meals' className='primary-button'>
          Back to Recipes
        </Link>
      </div>
    )
  }

  const ingredients = []

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`]
    const measure = meal[`strMeasure${i}`]

    if (ingredient && ingredient.trim()) {
      ingredients.push({
        ingredient: ingredient.trim(),
        measure: measure ? measure.trim() : ''
      })
    }
  }

  return (
    <div className='details-page'>
      <Link to='/meals' className='back-link'>
        ← Back to Recipes
      </Link>

      <div className='details-header'>
        <img src={meal.strMealThumb} alt={meal.strMeal} />

        <div className='details-intro'>
          <p className='eyebrow'>RECIPE DETAILS</p>
          <h1>{meal.strMeal}</h1>

          <p>
            {meal.strCategory || 'Recipe'}
            {meal.strArea ? ` · ${meal.strArea} cuisine` : ''}
          </p>

          {meal.strTags && (
            <p className='recipe-tags'>
              {meal.strTags.split(',').join(' · ')}
            </p>
          )}
        </div>
      </div>

      <section className='ingredients-section'>
        <h2>Ingredients</h2>

        <ul className='ingredients-list'>
          {ingredients.map((item, index) => (
            <li key={index}>
              <span>{item.ingredient}</span>
              <span>{item.measure}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className='instructions-section'>
        <h2>Cooking Instructions</h2>
        <p className='instructions-text'>{meal.strInstructions}</p>
      </section>

      {meal.strYoutube && (
        <a
          href={meal.strYoutube}
          target='_blank'
          rel='noreferrer'
          className='primary-button youtube-button'
        >
          Watch on YouTube ↗
        </a>
      )}
    </div>
  )
}

export default MealDetails
