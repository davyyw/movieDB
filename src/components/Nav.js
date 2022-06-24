import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

const Nav = ({ handleShowHideNav }) => {
  function closeNav(e) {
    e.stopPropagation();
    if (window.innerWidth < 800) {
      handleShowHideNav();
      console.log("less than 600");
    } else {
      e.target.blur();
    }
  }


  return (
    <nav className="main-nav" >
      <ul>
        <li onClick={closeNav}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li onClick={closeNav}>
          <NavLink to="/about">About</NavLink>
        </li>
        <li onClick={closeNav}>
          <NavLink to="/favorites">Favorites</NavLink>
        </li>
        <li className="search-listitem">
          <SearchBar handleShowHideNav={handleShowHideNav}/>
        </li>
      </ul>
      <span className="menu-divider"></span>
      <ul>
        <li className="nav-sort" onClick={closeNav}>
          <NavLink to="/sort/popular">Popular</NavLink>
        </li>
        <li className="nav-sort" onClick={closeNav}>
          <NavLink to="/sort/top-rated">Top Rated</NavLink>
        </li>
        <li className="nav-sort" onClick={closeNav}>
          <NavLink to="/sort/upcoming">Upcoming</NavLink>
        </li>
        <li className="nav-sort" onClick={closeNav}>
          <NavLink to="/sort/now-playing">Now Playing</NavLink>
        </li>
      </ul>
      <span className="menu-divider"></span>
    </nav>
  );
};

export default Nav;
