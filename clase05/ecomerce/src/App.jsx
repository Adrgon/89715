import {BrowserRouter, Routes, Route} from "react-router-dom";

import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";



function App() {
  const cartCount = 5;

  return (
    <BrowserRouter>
      <div className="app">
        <NavBar
          cartCount={cartCount}
          title="Coder Store"
        />

        <main className="app-content">
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer 
                greetings="Productos destacados" 
              />}
            />
            <Route
              path="/caterogy/:categoryId"
              element={
                <ItemListContainer
                  greetings="Categoria seleccionada"
              />} 
            />
            <Route 
              path="/detail/:productId"
              element={<ItemDetailContainer />}
            />
            <Route path="*"
              element={
                <div className="not-found">
                  <h1>404</h1>
                  <p>Producto no encontrado</p>
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
