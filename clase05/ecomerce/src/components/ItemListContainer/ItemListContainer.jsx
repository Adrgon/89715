import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer({ greetings = "Explora productos" }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const asyncFunctions = categoryId ? getProductsByCategory : getProducts;
    asyncFunctions(categoryId)
      .then((res) => {
        setProducts(res);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <section className="catalog">
      <header className="catalog__header">
        <h2>{greetings}</h2>
        <p>
          {categoryId
            ? `Categoria: ${categoryId}`
            : "Tecnologia seleccionada para vos."}
        </p>
      </header>
      {loading ? (
        <div className="status">Cargando productos...</div>
      ) : products.length === 0 ? (
        <div className="status">No hay productos disponibles.</div>
      ) : (
        <ItemList products={products} />
      )}
    </section>
  );
}

export default ItemListContainer;
