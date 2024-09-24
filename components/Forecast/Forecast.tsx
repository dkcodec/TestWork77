'use client'

import { useState, useEffect } from 'react'
import { getForecastByCity } from '../../lib/api/OpenWeather'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import styles from '@/styles/Forecast.module.scss'
import { ForecastData } from '@/types/weather'
import Image from 'next/image'
import Humidity from '@/public/humidity.svg'
import Wind from '@/public/wind.svg'

const groupForecastByDay = (
  forecastList: ForecastData['list']
): Record<string, ForecastData['list']> => {
  return forecastList.reduce(
    (acc: Record<string, ForecastData['list']>, item) => {
      const date = new Date(item.dt * 1000).toLocaleDateString()
      if (!acc[date]) {
        acc[date] = []
      }
      acc[date].push(item)
      return acc
    },
    {}
  )
}

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
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchForecast()
  }, [city])

  if (loading) return <LoadingSpinner />
  if (error) return <div className='alert alert-danger'>{error}</div>
  if (!forecast) return null

  const groupedForecast = groupForecastByDay(forecast.list)

  return (
    <div className={styles.forecastContainer}>
      {Object.keys(groupedForecast).map((day, index) => (
        <div key={index} className={styles.dayContainer}>
          <h3 className={styles.dayHeader}>{day}</h3>
          <div className={styles.dayForecast}>
            {groupedForecast[day].map((item, idx) => (
              <div key={idx} className={styles.forecastItem}>
                <p>
                  {new Date(item.dt * 1000).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </p>
                <div className={styles.temp}>
                  {Math.round(item.main.temp)}°C
                </div>
                <div className={styles.humidity}>
                  {Math.round(item.main.humidity)}
                  <Image src={Humidity} alt='humidity' width={20} height={20} />
                </div>
                <div className={styles.humidity}>
                  {Math.round(item.wind.speed)}
                  <sub>m/s</sub>
                  <Image src={Wind} alt='wind' width={20} height={20} />
                </div>
                <div className='weatherIcon'>
                  <Image
                    src={`https://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                    alt={item.weather[0].description}
                    width={50}
                    height={50}
                    priority
                  />
                </div>
                <p>{item.weather[0].description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Forecast
