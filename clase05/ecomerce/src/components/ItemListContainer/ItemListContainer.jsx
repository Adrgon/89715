import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";

function ItemListContainer({
  greetings = "Explora productos",
  categoryId = null,
  onSelectProduct,
}) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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
        <ItemList products={products} onSelectProduct={onSelectProduct}/>
      )}
    </section>
  );
}

export default ItemListContainer;
