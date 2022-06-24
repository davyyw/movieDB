import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom"

import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

function SearchBar({handleShowHideNav}) {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState("");
    function searchBar(e){
      // if(e.key == 'Enter'){
      if (inputValue !== "") {
        console.log(inputValue);
        handleShowHideNav();
        navigate(`/search/${inputValue}`);
      }
      //}
    }
    return (
      <div className="searchbar-container">
      <InputBase
        placeholder="Search"
        inputProps={{ 'aria-label': 'search movies' }}
        onChange={e=> {setInputValue(e.target.value.trim())}}
      />
      <IconButton type="submit" aria-label="search"  onClick={searchBar}>
        <SearchIcon />
      </IconButton>        
      </div>
    )
}

export default SearchBar