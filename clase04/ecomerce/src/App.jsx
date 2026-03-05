import  ProductList  from './components/ProductList'
import './App.css'

function App() {
  

  return (
    <div className='app'>
      <header className='header'>
        <h1> 🛒 Mi Tienda</h1>
        <p>useState y useEffect</p>
      </header>
      <main className='main'>
        <ProductList />
      </main>
    </div>
  );
}

export default App
