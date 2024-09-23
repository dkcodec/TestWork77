'use client'

import { useState, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'
import { useWeatherStore } from '../../store/weatherStore'
import { getWeatherByCity } from '../../lib/api/OpenWeather'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import styles from '@/styles/WeatherCard.module.scss'
import { WeatherData } from '@/types/weather'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface WeatherCardProps {
  city: string
}

const WeatherCard: React.FC<WeatherCardProps> = (props) => {
  const { city } = props
  const [weather, setWeather] = useState<WeatherData>()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const { addFavorite, favoritesCities, removeFavorite } = useWeatherStore()
  const router = useRouter()

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true)
      try {
        const data = await getWeatherByCity(city)
        setWeather(data)
      } catch (err) {
        setError('Failed to fetch weather data')
      } finally {
        setLoading(false)
      }
    }
    fetchWeather()
  }, [])

  const handleFullWeather = () => {
    router.push(`/forecast/${city}`)
  }

  if (loading) return <LoadingSpinner />
  if (error) return <div className='alert alert-danger'>{error}</div>
  if (!weather) return null

  console.log(weather)

  return (
    <Card className={styles.weatherCard}>
      <Card.Body onClick={handleFullWeather}>
        <Card.Title>{weather.name}</Card.Title>
        <Card.Text className={styles.temperature}>
          {Math.round(weather.main.temp)}°C
          <Image
            src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
            alt='icon'
            width={80}
            height={80}
          />
        </Card.Text>
        <Card.Text>{weather.weather[0].description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        {!favoritesCities.includes(weather.name) ? (
          <Button
            variant='outline-primary'
            onClick={() => addFavorite(weather.name)}
            className={styles.favoriteButton}
          >
            Add to Favorites
          </Button>
        ) : (
          <Button
            variant='outline-primary'
            onClick={() => removeFavorite(weather.name)}
            className={styles.favoriteButtonRemove}
          >
            Remove from Favorites
          </Button>
        )}
      </Card.Footer>
    </Card>
  )
}

export default WeatherCard
