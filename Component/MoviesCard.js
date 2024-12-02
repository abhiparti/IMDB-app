import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { handleWatchList } from "./Watchlistreducer";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useEffect, useState } from "react";
import "./Compo.css"

const MoviesCard = ({ movie }) => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => { 
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, []) 
    const dispatch = useDispatch();
    const handleWatchlist = (e) =>{
        dispatch(handleWatchList(movie));
    }
    return (
       
        isLoading
        ?
        <div className="cards">
            <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={300} duration={2} />
            </SkeletonTheme>
        </div>
        :
            <div className="cards">
                <img className="cards__img" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                <div className="cards__overlay">
                    <div className="card__title"><Link to={`/movie-detail/${movie.id}`} style={{textDecoration:"none", color:"white"}}>{movie.original_title}</Link></div>
                    <div className="card__runtime">
                        {movie.release_date}
                        <span className="card__rating">{movie.vote_average}<i className="fas fa-star" /></span>
                    </div>
                    <div className="card__description"><button data-id ={movie.id} onClick={handleWatchlist}>Add to watchlist</button>
                    </div>
                </div>
            </div>
    )
}

export default MoviesCard;







// import React, {useEffect, useState} from "react"
// import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
// import "./card.css"
// import { Link } from "react-router-dom"

// const Cards = ({movie}) => {

//     const [isLoading, setIsLoading] = useState(true)

//     useEffect(() => {
//         setTimeout(() => {
//             setIsLoading(false)
//         }, 1500)
//     }, []) 

//     return <>
//     {
        
//     }
//     </>
// }

// export default Cards