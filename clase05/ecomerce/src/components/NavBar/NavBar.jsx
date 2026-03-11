import "./NavBar.css";
import CardWidget from "../CardWidget/CardWidget";

function NavBar({ cartCount, title }) {
  return (
    <header className="nav">
      <div className="nav__inner">
        <button type="button" className="nav__brand">
          {title}
        </button>
        <nav className="nav__links" aria-label="Categorias">
          <button type="button" className="nav__link">
            Phones
          </button>
          <button type="button" className="nav__link">
            Tablets
          </button>
          <button type="button" className="nav__link">
            Computers
          </button>
        </nav>
        <div className="nav__actions">
          <CardWidget cartCount={cartCount} />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
