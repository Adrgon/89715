import "./ItemList.css";
import Item from "../Item/Item";

const ItemList = ({ products, onSelectProduct }) => {
  return (
    <div className="item-grid">
      {products.map((product) => (
        <Item 
          product={product} 
          key={product.id} 
          onSelectProduct={onSelectProduct}
          />
      ))}
    </div>
  );
};

export default ItemList;
