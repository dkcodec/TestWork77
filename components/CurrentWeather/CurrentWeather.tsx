import styles from '@/styles/CurrentWeather.module.scss'
import WeatherCard from '@/components/WeatherCard/WeatherCard'

// можно из апишки например какие-то популярные города вытягивать и отображать их погоду
const popularCities = ['Astana', 'Moscow', 'New York', 'Tokyo', 'London']

export default function CurrentWeather() {
  return (
    <>
      <h2>Popular</h2>
      <div className={styles.cardsBlock}>
        {popularCities.map((city) => (
          <WeatherCard key={city} city={city} />
        ))}
      </div>
    </>
  )
}
