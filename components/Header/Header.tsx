'use client'

import Image from 'next/image'
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle'
import WeatherIcon from '@/public/weatherIcon.svg'
import Links from './Links'
import { useRouter } from 'next/navigation'
import styles from '@/styles/Header.module.scss'

const Header: React.FC = () => {
  const router = useRouter()

  const handleHome = () => {
    router.push('/')
  }

  return (
    <header className={`${styles.container} container`}>
      <div className={styles.header}>
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
