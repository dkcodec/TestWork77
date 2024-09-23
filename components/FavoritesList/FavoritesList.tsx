'use client'

import { useWeatherStore } from '../../store/weatherStore'
import Link from 'next/link'
import { ListGroup, Button } from 'react-bootstrap'
import styles from '@/styles/FavoritesList.module.scss'

export default function FavoritesList() {
  const { favoritesCities, removeFavorite } = useWeatherStore()

  return (
    <div className={styles.favoritesList}>
      {favoritesCities.length === 0 ? (
        <p>No favorite cities added yet.</p>
      ) : (
        <ListGroup>
          {favoritesCities.map((city) => (
            <ListGroup.Item
              key={city}
              className='d-flex justify-content-between align-items-center'
            >
              <Link href={`/forecast/${city}`} className={styles.cityLink}>
                {city}
              </Link>
              <Button
                variant='danger'
                size='sm'
                onClick={() => removeFavorite(city)}
              >
                Remove
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </div>
  )
}
