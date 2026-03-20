import { BrowserRouter, Routes, Route, Link, NavLink, useParams } from "react-router-dom";

function Home() {
  return (
    <section>
      <h2>Inicio</h2>
      <p>Ejemplo basico de rutas con React Router.</p>
      <p>
        Proba una ruta con parametro: <Link to="/producto/42">/producto/42</Link>
      </p>
    </section>
  );
}

function About() {
  return (
    <section>
      <h2>Nosotros</h2>
      <p>Una pantalla simple para mostrar navegacion.</p>
    </section>
  );
}

function Producto() {
  const { id } = useParams();

  return (
    <section>
      <h2>Producto</h2>
      <p>Mostrando producto con id: {id}</p>
    </section>
  );
}

function NotFound() {
  return (
    <section>
      <h2>Ruta no encontrada</h2>
      <p>
        Volver al <Link to="/">inicio</Link>.
      </p>
    </section>
  );
}

export default function Enrutado() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <h1>Demo de Enrutado</h1>
          <nav style={{ display: "flex", gap: 12 }}>
            <NavLink to="/" end>
              Inicio
            </NavLink>
            <NavLink to="/nosotros">Nosotros</NavLink>
            <Link to="/producto/99">Producto 99</Link>
          </nav>
        </header>
        <main style={{ marginTop: 16 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/producto/:id" element={<Producto />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
