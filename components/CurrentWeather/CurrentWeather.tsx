'use client'

import { useState, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'
import { useWeatherStore } from '../../store/weatherStore'
import { getWeatherByCity } from '../../lib/api/OpenWeather'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import styles from '@/styles/CurrentWeather.module.scss'
import { WeatherData } from '@/types/weather'

export default function CurrentWeather() {
  const [weather, setWeather] = useState<WeatherData>()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const { addFavorite, favoritesCities } = useWeatherStore()

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true)
      try {
        const data = await getWeatherByCity('Astana')
        setWeather(data)
      } catch (err) {
        setError('Failed to fetch weather data')
      } finally {
        setLoading(false)
      }
    }
    fetchWeather()
  }, [])

  if (loading) return <LoadingSpinner />
  if (error) return <div className='alert alert-danger'>{error}</div>
  if (!weather) return null

  return (
    <Card className={styles.weatherCard}>
      <Card.Body>
        <Card.Title>{weather.name}</Card.Title>
        <Card.Text className={styles.temperature}>
          {Math.round(weather.main.temp)}°C
        </Card.Text>
        <Card.Text>{weather.weather[0].description}</Card.Text>
        <Button
          variant='outline-primary'
          onClick={() => addFavorite(weather.name)}
          disabled={favoritesCities.includes(weather.name)}
          className={styles.favoriteButton}
        >
          Add to Favorites
        </Button>
      </Card.Body>
    </Card>
  )
}
