import logo from "../assets/site-logo.png";
import Nav from "./Nav";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  // { title }
  const [navOpen, setNavOpen] = useState(false);

  const showHideNav = () => {
    setNavOpen(!navOpen);
  };

  const isDesktop = (e) => {
    if (e.matches) {
      setNavOpen(false);
    }
  };

  let mediaQuery = window.matchMedia("(min-width: 800px)");
  mediaQuery.addEventListener("change", isDesktop);

  useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 800px)");
    mediaQuery.addEventListener("change", isDesktop);
    // this is the cleanup function to remove the listener
    return () => mediaQuery.removeEventListener("change", isDesktop);
  }, []);

  return (
    <header className={navOpen ? "show" : undefined}>
      <div className="nav-logo-title">
        <NavLink className="logo" to="/">
          <img src={logo} alt="site logo" />
        </NavLink>
        <div className="title">
          <h1>
            <span className="title-span">gold</span>Reel Movies
          </h1>
          {/* <h1>gold</h1>
          <h1>Reel Movies</h1> */}
        </div>
      </div>
      <button
        className="btn-main-nav"
        onMouseDown={(e) => {
          e.preventDefault();
        }}
        onClick={showHideNav}
      >
        <span className="hamburger-icon">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </span>
        <span className="sr-only"></span>
      </button>
      {/* </div> */}
      <Nav handleShowHideNav={showHideNav} />
    </header>
  );
}
export default Header;
