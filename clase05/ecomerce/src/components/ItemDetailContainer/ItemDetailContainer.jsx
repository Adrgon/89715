import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { productId } = useParams();

  useEffect(() => {
    setLoading(true);
    setError("");
    getProductById(productId)
      .then((res) => {
        if (!res) {
          setError("Producto no encontrado.");
          return;
        }
        setProduct(res);
      })
      .catch(() => setError("No pudimos cargar el producto."))
      .finally(() => setLoading(false));
  }, [productId]);

  if (loading) {
    return <div className="status">Cargando detalle...</div>;
  }

  if (error) {
    return <div className="status">{error}</div>;
  }

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
