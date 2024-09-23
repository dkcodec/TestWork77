export interface WeatherData {
  name: string
  main: {
    temp: number
    feels_like: number
    humidity: number
  }
  weather: Array<{
    description: string
    icon: string
  }>
}

export interface ForecastData {
  list: Array<{
    dt: number
    main: {
      temp: number
    }
    weather: Array<{
      description: string
      icon: string
    }>
  }>
}
