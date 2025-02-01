import { configureStore } from '@reduxjs/toolkit'
import weather from '../store/home/index'
import country from '../store/search/index'

const store = configureStore({
  reducer: {
    weather: weather,
    country: country,
  },
})
export default store
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
