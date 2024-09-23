import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface WeatherStore {
  favoritesCities: string[]
  addFavorite: (city: string) => void
  removeFavorite: (city: string) => void
}

export const useWeatherStore = create<WeatherStore>()(
  persist(
    (set) => ({
      favoritesCities: [],
      addFavorite: (city: string) =>
        set((state: WeatherStore) => ({
          favoritesCities: Array.from(
            new Set([...state.favoritesCities, city])
          ),
        })),
      removeFavorite: (city: string) =>
        set((state: WeatherStore) => ({
          favoritesCities: state.favoritesCities.filter(
            (c: string) => c !== city
          ),
        })),
    }),
    {
      name: 'weather-store',
    }
  )
)
