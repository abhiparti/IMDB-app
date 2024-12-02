import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
          <Link to="/"><img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" /></Link>
          <Link style={{textDecoration:"none",color:"white"}} to="/popular" ><span>Popular</span></Link>
          <Link style={{textDecoration:"none",color:"white"}} to="/favourites"><span>Favourites</span></Link>
          <Link style={{textDecoration:"none",color:"white"}} to="/top-rated"><span>Top rated</span></Link>
          <Link style={{textDecoration:"none",color:"white"}} to="/upcoming"><span>Upcoming</span></Link>
        </div>
    )
}

export default Header;