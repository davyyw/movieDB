// Fav Button
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

function FavButton({ movieObj, remove, handleFavClick }) {

    function handleAddFav(){
        handleFavClick(true, movieObj);
        console.log("addFav");
    }

    function handleRemoveFav(){
        handleFavClick(false, movieObj);
        console.log("removeFav");
    }

    return (
        <>
            {remove === false ? (<IconButton onClick={handleAddFav} > <StarBorderIcon /> </IconButton>):(<IconButton onClick={handleRemoveFav}><StarIcon /></IconButton>)}
            
        </>
    );
    
}

FavButton.defaultProps = {
    remove: false
}

export default FavButton;
            // <button onClick={handleAddFav}>Add To Favs</button> : 
            // <button onClick={handleRemoveFav}>Remove From Favs</button>

