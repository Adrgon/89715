import "./NavBar.css";
import CardWidget from "../CardWidget/CardWidget";

function NavBar({ cartCount, title,  onNavigationHome, onNavigationCategory }) {
  console.log(cartCount)
  console.log(title)
  return (
    <header className="nav">
      <div className="nav__inner">
        <button type="button" className="nav__brand" onClick={onNavigationHome}>
          {title}
        </button>
        <nav className="nav__links" aria-label="Categorias">
          <button
            type="button"
            className="nav__link"
            onClick={() => onNavigationCategory("celular")}
          >
            Phones
          </button>
          <button
            type="button"
            className="nav__link"
            onClick={() => onNavigationCategory("tablet")}
          >
            Tablets
          </button>
          <button
            type="button"
            className="nav__link"
            onClick={() => onNavigationCategory("computer")}
          >
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
