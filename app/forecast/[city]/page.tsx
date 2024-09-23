import { Suspense } from 'react'
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner'
import Forecast from '@/components/Forecast/Forecast'

export default function ForecastPage({ params }: { params: { city: string } }) {
  return (
    <main className='container mt-5'>
      <h1 className='mb-4'>Weather Forecast for {params.city}</h1>
      <Suspense fallback={<LoadingSpinner />}>
        <Forecast city={params.city} />
      </Suspense>
    </main>
  )
}
