import Image from 'next/image'
import styles from './page.module.css'
import CurrentWeather from '@/components/CurrentWeather/CurrentWeather'
import SearchForm from '@/components/SearchForm/SearchForm'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className='container mt-5'>
        <h1 className='mb-4'>Weather App</h1>
        <SearchForm />
        <CurrentWeather />
      </main>
    </div>
  )
}
