import poster from "../assets/no-poster.png";
import fav from "../assets/icon-fav.png";
import favSelected from "../assets/icon-fav-select.png";

function PageMovie() {

  const movie = {
    title: 'Movie Title',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa minima provident qui aliquam a ut nesciunt aspernatur rerum est animi mollitia facilis accusantium distinctio assumenda praesentium, consectetur quos dicta aut!',
    poster_path: poster,
    rating: 'N/A',
    runtime: 'N/A',
    date: 'N/A',
  }

  return (
    <section className="single-card">
        <div className="poster-container">
            <img src={movie.poster_path} alt="Movie Poster" className="single-poster"/>
        </div>
        <div className="content-container">
            <h2>{movie.title}</h2>
            <p className="single-description">{movie.description}</p>
            <img src={fav} alt="Favorite" className="fav-icon"/>
            <p className="single-rating">Rating: <span>{movie.rating}</span></p>
            <p className="single-runtime">Runtime: {movie.runtime}</p>
            <p className="single-date">Release Date: {movie.date}</p>
        </div>
    </section>
  )
}
export default PageMovie