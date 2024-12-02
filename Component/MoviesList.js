import MoviesCard from "./MoviesCard"
import {useState,useEffect} from 'react';
import Pagination from "./Pagination";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "./Movielistreducer";


const MoviesList = () =>{
    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies.list);
    
    const fetchData = (pageno) => {
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=9f48a5b363c49e0c31bf3d09bb319827&page=${pageno}`)
        .then(res => res.json())
        .then(data => dispatch(setMovies(data.results || [])));
    }

    // const popularitycount = useMemo(() => movies.filter((mov) =>{
    //     console.log('heyy');
    //     return mov.popularity > 100;
    // }).length, [movies]);

    useEffect(()=>{
        fetchData(1);
    },[])
    return (
        <>
        <h1>UPCOMING</h1>
            <div className="mo-li">
                {
                    movies.map(movie => (
                        <MoviesCard movie ={movie}/>
                    ))
                }
            </div>
            <Pagination getpageno={fetchData}/>
        </>
    )
}

export default MoviesList;