import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    favourites : [],
    filterFavourites :[],
    genres : [],
    selectgenres : '',
}

export const watchListSlice = createSlice({
  name: 'watchList',
  initialState,
  reducers: {
    handleWatchList : (state,action) =>{
        const isadded = state.favourites.find(mov => mov.id == action.payload.id);
        if(!isadded) state.favourites.push(action.payload);
        watchListSlice.caseReducers.onWatchlistchange(state,action);
    },
    onWatchlistchange : (state,action) =>{
        const data = state.favourites;
        const genredata = data.map(genreid => genreid.genre_ids[0]);
        state.genres = (Array.from(new Set(genredata)));
        state.filterFavourites = state.favourites;
    },
    setFavrender: (state) => {
      state.value += 1
    },
    setfilterFavour: (state,action) => {
        state.filterFavourites= state.favourites.filter(genid => !state.selectgenres || genid.genre_ids[0] == state.selectgenres);
    },
    setGenre: (state, action) => {
      state.value += action.payload
    },
    setSelectedgenre :(state,action) =>{
        state.selectgenres = action.payload;
    },
    handleSearch: (state,action)=>{
       state.filterFavourites=  state.favourites.filter(mov =>  mov.title.toLowerCase().includes(action.payload.toLowerCase()));
    },
    handleSort : (state,action)=>{
        if(!action.payload){
            state.filterFavourites = state.favourites;
        }
        state.filterFavourites = [...state.favourites].sort((a,b)=>{
            return action.payload ==="ASCD" ? a.popularity - b.popularity : b.popularity - a.popularity ;
        })
    },
    handledelete :(state,action) =>{
        const idx = state.favourites.findIndex(fav => fav.id == action.payload);
        state.favourites.splice(idx,1);
        watchListSlice.caseReducers.onWatchlistchange(state,action);
    }
  },
})

// Action creators are generated for each case reducer function
export const { handleWatchList,onWatchlistchange,setFavrender,setSelectedgenre,setGenre,setfilterFavour,handleSearch,handleSort,handledelete} = watchListSlice.actions;

export default watchListSlice.reducer