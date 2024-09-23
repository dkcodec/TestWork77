export interface WeatherData {
  name: string
  clouds: { all: number }
  main: {
    temp: number
    feels_like: number
    humidity: number
    pressure: number
    temp_max: number
    temp_min: number
  }
  weather: Array<{
    description: string
    icon: string
    id: number
    main: string
  }>
  wind: {
    deg: number
    speed: number
  }
}

export interface ForecastData {
  city: {
    country: string
    id: number
    name: string
    population: number
    sunrise: number
    sunset: number
    timezone: number
  }
  list: Array<{
    dt: number
    dt_txt: string
    main: {
      temp: number
      feels_like: number
      humidity: number
      pressure: number
      temp_max: number
      temp_min: number
    }
    weather: Array<{
      description: string
      icon: string
      id: number
      main: string
    }>
    clouds: {
      all: number
    }
    wind: {
      deg: number
      speed: number
      gust: number
    }
  }>
}
