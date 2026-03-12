import "./ItemDetail.css";

const ItemDetail = ({ product, onBack }) => {
  if (!product) {
    return null;
  }

  const inStock = product.stock > 0;

  return (
    <section className="detail">
      <div className="detail__media">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="detail__info">
        <span className="detail__category">{product.category}</span>
        <h2>{product.name}</h2>
        <p className="detail__price">${product.price}</p>
        <p className={`detail__stock ${inStock ? "" : "is-empty"}`}>
          {inStock ? `Stock disponible: ${product.stock}` : "Sin stock"}
        </p>
        <p className="detail__description">{product.description}</p>
        <div className="detail__actions">
          <button type="button" className="detail__cta" disabled={!inStock}>
            {inStock ? "Agregar al carrito" : "No disponible"}
          </button>
          <button 
            type="button" 
            className="detail__back"
            onClick={onBack}
            >
            Seguir comprando
          </button>
        </div>
      </div>
    </section>
  );
};

export default ItemDetail;
