import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const cartCount = 5;

  return (
    <BrowserRouter>
      <div className="app">
        <NavBar cartCount={cartCount} title="Coder Store" />
        <main className="app-content">
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greetings="Productos destacados" />}
            />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer greetings="Categoria seleccionada" />}
            />
            <Route path="/detail/:productId" element={<ItemDetailContainer />} />
            <Route
              path="*"
              element={
                <div className="not-found">
                  <h1>404</h1>
                  <p>Pagina no encontrada.</p>
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
