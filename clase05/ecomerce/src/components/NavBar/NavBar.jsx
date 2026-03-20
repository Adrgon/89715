import "./NavBar.css";
import { NavLink } from "react-router-dom";
import CardWidget from "../CardWidget/CardWidget";

function NavBar({ cartCount, title }) {
  return (
    <header className="nav">
      <div className="nav__inner">
        <NavLink className="nav__brand" to="/" end>
          {title}
        </NavLink>
        <nav className="nav__links" aria-label="Categorias">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav__link nav__link--active" : "nav__link"
            }
            to="/category/celular"
          >
            Phones
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav__link nav__link--active" : "nav__link"
            }
            to="/category/tablet"
          >
            Tablets
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav__link nav__link--active" : "nav__link"
            }
            to="/category/computer"
          >
            Computers
          </NavLink>
        </nav>
        <div className="nav__actions">
          <CardWidget cartCount={cartCount} />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
