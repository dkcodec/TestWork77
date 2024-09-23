'use client'

import { useState, useEffect } from 'react'
import { getForecastByCity } from '../../lib/api/OpenWeather'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import styles from '@/styles/Forecast.module.scss'
import { ForecastData } from '@/types/weather'

const Forecast = ({ city }: { city: string }) => {
  const [forecast, setForecast] = useState<ForecastData>()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const data = await getForecastByCity(city.split('%20').join(' '))
        setForecast(data)
      } catch (err) {
        setError('Failed to fetch forecast data')
      } finally {
        setLoading(false)
      }
    }
    fetchForecast()
  }, [city])

  if (loading) return <LoadingSpinner />
  if (error) return <div className='alert alert-danger'>{error}</div>
  if (!forecast) return null

  console.log(forecast)

  return (
    <div className={styles.forecastContainer}>
      {forecast.list.map((item, index) => (
        <div key={index} className={styles.forecastItem}>
          <p>{new Date(item.dt * 1000).toLocaleDateString()}</p>
          <div className='temp'>{Math.round(item.main.temp)}°C</div>
          <div className='weatherIcon'>
            <img
              src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
              alt={item.weather[0].description}
            />
          </div>
          <p>{item.weather[0].description}</p>
        </div>
      ))}
    </div>
  )
}

export default Forecast
