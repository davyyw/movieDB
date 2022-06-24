import MovieCard from './MovieCard';
import isFav from '../utilities/isFav';
import { useSelector } from 'react-redux';

function Movies({ moviesData }) {
    const favs = useSelector((state) => state.fav.items);

    return (
        <div className="movies-container">
           {moviesData.map(movie => <MovieCard key={movie.id} movie={movie} isFav={isFav(favs, null, movie.id)}/>)}
        </div>
    )
}

export default Movies 
