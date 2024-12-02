import { configureStore } from '@reduxjs/toolkit'
import Movielistreducer from '../Component/Movielistreducer'
import Watchlistreducer from '../Component/Watchlistreducer'

export const store = configureStore({
  reducer: {
    movies : Movielistreducer,
    watchList : Watchlistreducer,
  },
})