import { useState, useEffect } from "react";
import { productsApi } from "../api/products.js";
import ProductCard from "./ProductCard";

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    function cargarProductos() {
      productsApi
        .getAll()
        .then((data) => {
          setProducts(data);
          setError(null);
        })
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    }

    useEffect(() => {
      cargarProductos();
    }, []);

    if (loading) return <p className="loading">Cargando productos...</p>;
    if (error)
      return (
        <p className="error">
          Error: {error}. <button onClick={cargarProductos}>Reintentar</button>
        </p>
      );
    if (!products.length) return <p>No hay productos.</p>;
    
    return (
      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <h3>Productos</h3>
        <button onClick={cargarProductos} style={{ marginBottom: "0.75rem" }}>
          Refrescar
        </button>
        <ul>
          {products.map((p) => (
            <ProductCard key={p.id} product={p}/>
          ))}
        </ul>
      </section>
    );
}
