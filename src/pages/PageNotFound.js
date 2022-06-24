import { useEffect } from "react"
import { appTitle } from "../globals/globals";

const PageNotFound = () => {

    useEffect(() => {
        document.title = `${appTitle} - Page Not Found`;
    }, []);

  return (
    <section id="error-card" className="info-card">
      <h2>404 Error</h2>
      <p>The page you are looking for was not found.</p>
    </section>
  )
}
export default PageNotFound;