import axios from 'axios'

const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export const getWeatherByCity = async (city: string) => {
  try {
    console.log('BASE_URL:', BASE_URL)
    const resoponse = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
      },
    })

    return resoponse.data
  } catch (error) {
    console.error('Error fetching weather data:', error)
  }
}

export const getForecastByCity = async (city: string) => {
  try {
    const resoponse = await axios.get(`${BASE_URL}/forecast`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
      },
    })
    return resoponse.data
  } catch (error) {
    console.error('Error fetching forecast data:', error)
  }
}
