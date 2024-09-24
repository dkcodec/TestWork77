'use client'

import { Suspense } from 'react'
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner'
import Forecast from '@/components/Forecast/Forecast'
import { useWeatherStore } from '@/store/weatherStore'
import { Button } from 'react-bootstrap'
import styles from '@/styles/ForecastPage.module.scss'

export default function ForecastPage({ params }: { params: { city: string } }) {
  const { addFavorite, favoritesCities, removeFavorite } = useWeatherStore()

  return (
    <main className='container mt-5'>
      <h1 className='mb-4'>
        Weather Forecast for {params.city.split('%20').join(' ')}
      </h1>
      {!favoritesCities.includes(params.city.split('%20').join(' ')) ? (
        <Button
          variant='outline-primary'
          onClick={() => addFavorite(params.city.split('%20').join(' '))}
          className={styles.favoriteButton}
        >
          Add to Favorites
        </Button>
      ) : (
        <Button
          variant='outline-primary'
          onClick={() => removeFavorite(params.city.split('%20').join(' '))}
          className={styles.favoriteButtonRemove}
        >
          Remove from Favorites
        </Button>
      )}
      <Suspense fallback={<LoadingSpinner />}>
        <Forecast city={params.city} />
      </Suspense>
    </main>
  )
}
