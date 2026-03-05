

function ProductCard({product}) {
    console.log(product)
  return (
    <>
      <h2>{product.name}</h2>
      <p>Precio: ${product.price}</p>
    </>
  );
}

export default ProductCard
