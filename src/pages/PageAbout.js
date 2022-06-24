import { useEffect } from "react";
import { appTitle } from "../globals/globals";
import tmdbLogo from "../assets/tmdb-logo.svg";

const PageAbout = () => {
  useEffect(() => {
    document.title = `${appTitle} - About`;
  }, []);

  return (
    <section id="about-card" className="info-card">
      <h2>About</h2>
      <div className="tmdb">
        <p>
          This product uses the TMDb API but is not endorsed or certified by
          TMDb. <br /> The “Movie Database” is an application that allows users
          to easily search, favorite, and find other valuable information about
          movies around the world. This application uses the TMDb API. This
          application was created for educational purposes only.
        </p>
        <img className="tbdbLogo" src={tmdbLogo} alt="tbdb logo" />
      </div>
    </section>
  );
};
export default PageAbout;
