import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const cartCount = 5;

  return (
    <div className="app">
      <NavBar cartCount={cartCount} title="Coder Store" />
      <main className="app-content">
        <ItemListContainer greetings="Productos destacados" />
      </main>
    </div>
  );
}

export default App;
