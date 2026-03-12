import { useState } from "react";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  const cartCount = 5;
  const [view, setView] = useState("list"); // "list" | "detail"
  const [categoryId, setCategoryId] = useState(null);
  const [productId, setProductId] = useState(null);


  const goToDetail = (id) => {
    setView('detail');
    setProductId(id)
  }

  const goHome = () => {
    setView('list');
    setCategoryId(null);
    setProductId(null);
  }

  const goToCategory = (id) => {
    setView('list')
    setCategoryId(id)
    setProductId(null)
  }
  return (
    <div className="app">
      <NavBar 
        cartCount={cartCount} 
        title="Coder Store" 
        onNavigationHome={goHome}
        onNavigationCategory={goToCategory}
        />
      
      <main className="app-content">
        {view === "list" && (
          <ItemListContainer 
            greetings="Productos destacados"
            categoryId={categoryId}
            onSelectProduct={goToDetail}
            />
        )}
        {view === "detail" && productId && (
          <ItemDetailContainer productId={productId} onBack={goHome} />
        )}
        {view === 'detail' && !productId && (
          <div className="not-found">
            <h1>404</h1>
            <p>Producto no encontrado</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
