import { useEffect, useState } from "react";
import { appTitle } from "../globals/globals";
import { useParams } from "react-router-dom";
import isFav from "../utilities/isFav";
import { useSelector } from "react-redux";
import { API_KEY } from "../globals/globals";
import SingleCard from "../components/SingleCard";

const PageSingle = () => {
  useEffect(() => {
    //this is for page tab title
    document.title = `${appTitle} - Single`;
  }, []);

  const favs = useSelector((state) => state.fav.items); //this is for storage

  const { id } = useParams();

  const [singleMovie, setSingleMovie] = useState({}); //this is for display movie information
  useEffect(() => {
    const fetchSingleMovie = async () => {
      const resSingle = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
      );
      const movieSingleData = await resSingle.json();
      console.log("this is from json", movieSingleData);
      setSingleMovie(movieSingleData);
      console.log("this is after set", singleMovie);
    };
    fetchSingleMovie();
  }, []);

  const [movieDataTrailer, setMovieDataTrailer] = useState(false); //this is for fetching movie trailer
  const [error, setError] = useState(false);
  const [trailerKey, setTrailerKey] = useState(false);
  const errorMessage = "Oh no...Something went wrong...Please try again later.";
  useEffect(() => {
    //get the response from server and use json() to parse this response
    const fetchTrailer = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
      ).catch((_) => {
        movieDataTrailer !== false && setMovieDataTrailer(false);
        setError(errorMessage);
      });
      const data = await res.json();
      if (data.success === false) {
        movieDataTrailer !== false && setMovieDataTrailer(false);
        error !== false && setError(false);
        setError(errorMessage);
      } else {
        error !== false && setError(false);
        setMovieDataTrailer(data);
      }
    };
    fetchTrailer();
  }, []);
  useEffect(() => {
    //get the trailer video key from a list of videos
    if (movieDataTrailer !== false) {
      const youTubeTrailer = movieDataTrailer.results.find(
        (element) => element.type === "Trailer" && element.site === "YouTube"
      );
      if (youTubeTrailer !== undefined) {
        setTrailerKey(youTubeTrailer.key);
      }
    }
  }, [movieDataTrailer]);

  const [creditsData, setCreditsData] = useState(false);
  const [errorCredits, setCreditsError] = useState(false);
  const errorCreditsMessage = "No Credit to show.";
  useEffect(() => {
    const fetchCredits = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
      ).catch((err) => {
        creditsData !== false && setCreditsData(false);
        setCreditsError(errorCreditsMessage);
      });

      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        creditsData !== false && setCreditsData(false);
        errorCredits !== false && setCreditsError(false);
        setCreditsError(errorCreditsMessage);
      } else {
        errorCredits !== false && setCreditsError(false);
        const first6Credits = data.cast.splice(0, 6);
        setCreditsData(first6Credits);
      }
    };

    fetchCredits();
  }, []);

  return (
    <section className="single-page">
      {movieDataTrailer !== {} && (
        <SingleCard
          credits={creditsData}
          video={movieDataTrailer}
          trailerKey={trailerKey}
          movie={singleMovie}
          isFav={isFav(favs, null, singleMovie.id)}
        />
      )}
    </section>
  );
};
export default PageSingle;

// movie={singleMovie} isFav={isFav(favs, null, singleMovie.id)}
