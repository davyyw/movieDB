import { NavLink } from 'react-router-dom';

function NavMain() {
    return (
        <nav className="nav-main">
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/favs">Favs</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavMain
