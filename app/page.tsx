import CurrentWeather from '@/components/CurrentWeather/CurrentWeather'
import SearchForm from '@/components/SearchForm/SearchForm'

export default function Home() {
  return (
    <main className='container'>
      <SearchForm />
      <CurrentWeather />
    </main>
  )
}
