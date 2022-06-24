import { appTitle } from "../globals/globals";
import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import NavSort from "../components/NavSort";
import Movies from '../components/Movies';
import { API_KEY } from '../globals/globals';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

function PageSearch() {
    const { value } = useParams();
    console.log("this is value:");
    console.log(value);
    useEffect(() => {
      document.title = `${appTitle} - Search`;
    }, []);

    const [moviesPage, setMoviesPage] = useState(1);
    const [moviesData, setMoviesData] = useState(null);

    useEffect(() => {

        const fetchMovies = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${value}&language=en-US&page=${moviesPage}&include_adult=false`
                // headers: {
                //     'Accept': 'application/json',
                //     'Content-Type': 'application/json',
                //     'Authorization': 'Bearer ' + API_TOKEN
                //   }
            );
            console.log("below are for fetchMovies");
            console.log(res);
            const moviesData = await res.json();
            const first20Movies = moviesData.results; 
            console.log(first20Movies);
            setMoviesData(first20Movies);
          }
      
          fetchMovies();

    }, [value, moviesPage]);

    function nextPage(){
        var moviesPageCopy = moviesPage;
        moviesPageCopy++;
        setMoviesPage(moviesPageCopy);
    }
    function prevPage(){
        var moviesPageCopy = moviesPage;
        if(moviesPageCopy !== 1)
            moviesPageCopy--;
        setMoviesPage(moviesPageCopy);
    }

    return (
        <section className="home-page">
            <NavSort />
            {moviesData !== null && <Movies moviesData={moviesData} />}
            {moviesPage == 1 ?
                (<Stack direction="row" spacing={2}>
                    {/* <Button className="next-button" onClick={nextPage} variant="contained" endIcon={<NavigateNextIcon />}>
                        Next Page
                    </Button> */}
                    <button className="next-button" onClick={nextPage}>Next</button>
                </Stack>) :
                (<Stack direction="row" spacing={2}>
                    {/* <Button className="prev-button" onClick={prevPage} variant="contained" startIcon={<NavigateBeforeIcon/>}>
                        Prev Page
                    </Button>
                    <Button className="next-button" onClick={nextPage} variant="contained" endIcon={<NavigateNextIcon />}>
                        Next Page
                    </Button> */}
                    <button className="prev-button" onClick={prevPage}>Back</button>
                    <button className="next-button" onClick={nextPage}>Next</button>
                </Stack>)
            }
        </section>
    )
}
export default PageSearch;