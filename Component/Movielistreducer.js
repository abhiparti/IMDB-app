import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [],
}

export const movieListSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state,action) => {
      state.list = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setMovies } = movieListSlice.actions

export default movieListSlice.reducer