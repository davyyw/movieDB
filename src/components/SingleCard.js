import { Link } from "react-router-dom";
import { API_KEY } from "../globals/globals";
import { useEffect, useState } from "react";
import noPoster from "../assets/no-poster.png";
import FavButton from "./FavButton";
import { useDispatch } from "react-redux";
import { addFav, deleteFav } from "../features/favorite/favSlice";
//, movie, isFav
function SingleCard({ credits, video, trailerKey, movie, isFav }) {
  const dispatch = useDispatch();
  function handleFavClick(addToFav, obj) {
    if (addToFav === true) {
      dispatch(addFav(obj));
    } else {
      dispatch(deleteFav(obj));
    }
  }
    return (
        <>
        <div className="single-movie-card">
            <div className="single-movie-poster">
                {movie.poster_path === null ? 
                    <img src={noPoster} alt="No poster available." /> : 
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                }  
            </div>
            <div className="movie-description">
                <h2>{movie.title}</h2>
                <p className="single-description">{movie.overview}</p>
                <div className="btn-favourite">
                    {isFav ? 
                        <FavButton movieObj={movie} remove={true} handleFavClick={handleFavClick} /> : 
                        <FavButton movieObj={movie} handleFavClick={handleFavClick} />
                    }
                </div>
                <p className="single-rating">Rating: <span>{movie.vote_average*10 + '%'}</span></p>
                <p className="single-runtime">Runtime: {movie.runtime + "m"}</p>
                <p className="single-date">Release Date: {movie.release_date}</p>
                <div className="credits-section">
                  <h3>Cast</h3>
                  <ul>
                    {credits !== false ? (
                      credits.map((credit) => <li>{credit.name}</li>)
                    ) : (
                      <h4>No Cast Infomation Available</h4>
                    )}
                  </ul>
                </div>
              <Link to={`/`}>Home</Link>
            </div>
        </div>
        <div className="trailer-card">
            {
                trailerKey !== false ?
                <iframe
                // width='660'
                // height='315'
                src={`https://www.youtube.com/embed/${trailerKey}`}
                title={video.title}
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                ></iframe> :
                <h3>No Trailers Available</h3>
            }
        </div>
      </>
    )
  
}

export default SingleCard;
