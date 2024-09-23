import { Spinner } from 'react-bootstrap'
import styles from '@/styles/LoadingSpinner.module.scss'

export default function LoadingSpinner() {
  return (
    <div className={styles.spinnerContainer}>
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    </div>
  )
}
