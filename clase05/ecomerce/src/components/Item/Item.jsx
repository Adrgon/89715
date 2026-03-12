import "./Item.css";

const Item = ({ product, onSelectProduct }) => {
  const inStock = product.stock > 0;

  return (
    <article className="item-card">
      <div className="item-card__image-wrap">
        <img src={product.img} alt={product.name} loading="lazy" />
      </div>
      <div className="item-card__body">
        <span className="item-card__category">{product.category}</span>
        <h3>{product.name}</h3>
        <p className="item-card__price">${product.price}</p>
        <p className={`item-card__stock ${inStock ? "" : "is-empty"}`}>
          {inStock ? `Stock: ${product.stock}` : "Sin stock"}
        </p>
        <button 
          type="button" 
          className="item-card__cta"
          onClick={()=> onSelectProduct?.(product.id)} >
          Ver detalle
        </button>
      </div>
    </article>
  );
};

export default Item;
