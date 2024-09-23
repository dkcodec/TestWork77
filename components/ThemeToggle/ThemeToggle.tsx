'use client'

import { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import styles from '@/styles/ThemeToggle.module.scss'

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    setIsDarkMode(savedTheme === 'dark')
    document.body.setAttribute('data-theme', savedTheme || 'light')
  }, [])

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark'
    setIsDarkMode(!isDarkMode)
    document.body.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <Form className={styles.themeToggleForm}>
      <Form.Check
        type='switch'
        id='theme-switch'
        label={isDarkMode ? 'Dark Mode' : 'Light Mode'}
        checked={isDarkMode}
        onChange={toggleTheme}
        className={styles.themeToggleSwitch}
      />
    </Form>
  )
}

export default ThemeToggle
