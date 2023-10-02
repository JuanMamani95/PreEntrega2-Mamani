import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {


    return (
    <nav className="navbar">
        <Link to="/" className="logo"><img src="/src/data/img/logo.png" alt="logo" /></Link>
        <ul className="menu">
            <li><Link to="/" className="menu-link">Inicio</Link></li>
            <li><Link to="/productos" className="menu-link">Productos</Link></li>
            <li><Link to="/productos/dulce" className="menu-link">Dulce</Link></li>
            <li><Link to="/productos/salado" className="menu-link">Salado</Link></li>
        </ul>
    </nav>
    )
}

export default Navbar;



