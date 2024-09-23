import styles from './page.module.css'
import CurrentWeather from '@/components/CurrentWeather/CurrentWeather'
import SearchForm from '@/components/SearchForm/SearchForm'
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle'
import Image from 'next/image'
import WeatherIcon from '@/public/weatherIcon.svg'

export default function Home() {
  return (
    <main className='container'>
      <SearchForm />
      <CurrentWeather />
    </main>
  )
}
