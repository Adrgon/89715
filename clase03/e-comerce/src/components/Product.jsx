import { useEffect, useState } from "react";

export function Product({ nombre, descripcion, children }) {
  
  const [compra, setCompra] = useState(0);

  useEffect(() => {
    console.log("Product montada");
    return () => {
      console.log("Product desmontada");
    };
  }, []);

  useEffect(() => {
    console.log("Product actualizado", compra);
  }, [compra]);
  
    return (
      <div>
        <h2>{children}</h2>
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <button onClick={() => setCompra(compra + 1)}>Comprar</button>
      </div>
    );
}
