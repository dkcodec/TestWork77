'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Form, Button } from 'react-bootstrap'
import styles from '@/styles/SearchForm.module.scss'

export default function SearchForm() {
  const [city, setCity] = useState<string>('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(`/forecast/${city}`)
  }

  return (
    <Form onSubmit={handleSubmit} className={styles.form}>
      <Form.Group controlId='citySearch'>
        <Form.Control
          type='text'
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder='Enter city name'
          className={styles.input}
        />
      </Form.Group>
      <Button variant='primary' type='submit' className={styles.button}>
        Search
      </Button>
    </Form>
  )
}
