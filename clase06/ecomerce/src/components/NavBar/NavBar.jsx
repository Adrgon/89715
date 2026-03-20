import "./NavBar.css";
import { Link } from "react-router-dom";
import CardWidget from "../CardWidget/CardWidget";
import { useTheme } from "../../context/ThemeContext";

function NavBar({ cartCount, title }) {
  //const theme = "light";
  const {theme, toggleTheme} = useTheme();

  return (
    <header className="nav">
      <div className="nav__inner">
        <Link className="nav__brand" to="/">
          {title}
        </Link>
        <nav className="nav__links" aria-label="Categorias">
          <Link className="nav__link" to="/category/celular">
            Phones
          </Link>
          <Link className="nav__link" to="/category/tablet">
            Tablets
          </Link>
          <Link className="nav__link" to="/category/computer">
            Computers
          </Link>
        </nav>
        
        <div className="nav__actions">
          <button
            type="button"
            className="theme-toogle"
            aria-label={`Cambiar a tema ${theme === "light" ? "oscuro" : "claro"}`}
            onClick={toggleTheme}
          >
            {theme=== "light" ? "🌙" : "☀️"}
          </button>
        </div>
        
        <div className="nav__actions">
          <CardWidget cartCount={cartCount} />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
