import Header from "./Header";
import MoviesList from "./MoviesList";
import {
  BrowserRouter,
    createBrowserRouter,
    Route,
    RouterProvider,
    Routes,
  } from "react-router-dom";
// import Favourites from "./Favourites";
import { store } from "../Store/store";
import { Provider } from 'react-redux'
import Toprated from "./Toprated";
import MoviesDetails from "./MovieDetail";
import Heading from "./Heading";
import Favourites from "./Favourites";
import Popular from "./Popular";


const Moviesapp = () => {
    return(
      <Provider store={store}>
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element ={<Heading />} />
            <Route path="/movie-detail/:movieId" element ={<MoviesDetails/>} />
            <Route path="/favourites" element ={<Favourites />} />
            <Route path="/top-rated" element ={<Toprated/>} />
            <Route path="/popular" element ={<Popular/>} />
            <Route path="/upcoming" element ={<MoviesList/>} />

        </Routes>
       </BrowserRouter>
      </Provider>
    )
};

export default Moviesapp;