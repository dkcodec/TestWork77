'use client'

import Image from 'next/image'
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle'
import WeatherIcon from '@/public/weatherIcon.svg'
import Links from './Links'
import { useRouter } from 'next/navigation'

const Header: React.FC = () => {
  const router = useRouter()

  const handleHome = () => {
    router.push('/')
  }

  return (
    <header className='container'>
      <div className='d-flex justify-content-between align-items-center mb-4'>
        <h1 className='d-flex align-items-center' onClick={handleHome}>
          AbeloHost
          <Image src={WeatherIcon} alt='weatherIcon' width={80} height={80} />
        </h1>
        <div className='d-flex align-items-center'>
          <Links />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header
