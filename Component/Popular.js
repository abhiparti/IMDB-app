import React, {useEffect, useState} from "react"
import "./Compo.css"
import MoviesCard from "./MoviesCard"
import Pagination from "./Pagination"
// import { useParams } from "react-router-dom"

const Popular = () => {
    
    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        getData(1)
    }, [])
    const getData = (pageno) => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&page=${pageno}`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }
    return (
        <div className="movie__list">
            <h2 className="list__title">POPULAR</h2>
            <div className="list__cards">
                {
                    movieList.map(movie => (
                        <MoviesCard movie={movie} />
                    ))
                }
            </div>
            <Pagination getpageno={getData}/>
        </div>
    )
}

export default Popular;