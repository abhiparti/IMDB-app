import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleSearch, handleSort, handledelete, setSelectedgenre, setfilterFavour } from "./Watchlistreducer";

let genreids = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Sci-Fi",
    10770: "TV",
    53: "Thriller",
    10752: "War",
    37: "Western",
};

const Favourites = () =>{
    // const [favour, setFavrender] = useState([]);
    // const [filterFavour, setfilterFavour] = useState([]);
    // const [genre , setGenre] = useState([]);
    // const [selectgenre, setSelectedgenre] = useState('');

    const {favourites,
        filterFavourites,
        genres,
        selectgenres
    } = useSelector(state => state.watchList);

    const dispatch = useDispatch();


    // useEffect(()=>{
    //     const data = JSON.parse(localStorage.getItem("favourite") || '[]');
    //     const genredata = data.map(genreid => genreid.genre_ids[0]);
    //     setGenre(Array.from(new Set(genredata)));
    //     setFavrender(data);
    //     setfilterFavour(data);
    // },[]);
    
    useEffect(()=>{
        // setfilterFavour(()=>{
        //     return favourites.filter(genid => !selectgenre || genid.genre_ids[0] == selectgenre);
        // })
        dispatch(setfilterFavour());
    },[selectgenres, favourites])

    const handleGenre = (e)=>{
        const id = e.target.dataset.id;
        dispatch(setSelectedgenre(id));
    }
    const handleSearching = (e)=>{
        const text = e.target.value;
        dispatch(handleSearch(text));
    }
    const handleSorting =(e)=>{
        const type = e.target.dataset.type;
        dispatch(handleSort(type));
    }
    const handleDelete =(movieid)=>(e)=>{
        dispatch(handledelete(movieid));
    }
    return (
        <div>
            <h1>Favourites movies</h1>
            <div className="fav">
            <div className="left">
                <div className="genre-div">
                    <div className={`genre ${selectgenres === '' ? 'selected' : ''}`} onClick={handleGenre} data-id=''>All genre</div>
                    {
                        genres.map(gen =>(
                            <div className={`genre ${selectgenres == gen ? 'selected' : ''}`} data-id={gen} onClick={handleGenre}>{genreids[gen]}</div>
                        ))
                    }
                </div>
            </div>
            <div className="right">
                <input type="text" placeholder="Search Movies" onChange={handleSearching}/>
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>
                                <span data-type="" onClick={handleSorting}>Popularity</span>
                                <span data-type="ASCD" onClick={handleSorting}>A</span>
                                <span data-type="DECN" onClick={handleSorting}>D</span>
                            </th>
                            <th>Rating</th>
                            <th>Acton</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           filterFavourites.map((fav) => (
                                 <tr>
                                    <td><img src={`https://image.tmdb.org/t/p/w500/${fav.poster_path}`} style={{width: "80px"}}></img></td>
                                    <td>{fav.title}</td>
                                    <td>{genreids[fav.genre_ids[0]]}</td>
                                    <td>{fav.popularity}</td>
                                    <td>{fav.vote_average}</td>
                                   <td><button onClick={handleDelete(fav.id)}>Delete</button></td>
                                </tr>
                           ))
                        }
                    </tbody>
                </table>
            </div>
             </div>
        </div>
        
    )
}

export default Favourites;