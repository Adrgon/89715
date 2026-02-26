//import  {Product} from "./Product"

import { useRef, useState } from "react";
import { Product } from "./Product";

export default function Shop() {

    const inputRef = useRef(null)
    const [query, setQuery] = useState("");

    const buscar = () => {
        setQuery(inputRef.current.value);
    }

    console.log(query)

    const products = [
       {id: 1, nombre:"Curso Javascript", descripcion: "Curso dictado por coderhouse"},
       {id: 2, nombre:"Curso React", descripcion: "Curso dictado por Pao y Adrian"},
       {id: 3, nombre:"Curso Node.js", descripcion: "Curso dictado por Juan y Maria"} 
    ]
    return (
      <>
        <h1>Tienda Coder</h1>
        <input ref={inputRef} placeholder="Buscar producto"/>
        <button onClick={buscar}>buscar</button>
        {products.map((item)=> 
            <Product key={item.id} nombre={item.nombre} descripcion={item.descripcion}>
                <strong>{item.id}</strong>
            </Product>
        )}

    {/*     <Product
          nombre="Curso Javascript"
          descripcion="Curso dictado por coderhouse"
        >
          <strong>1</strong>
        </Product>
        <Product
          nombre="Curso React"
          descripcion="Curso dictado por Pao y Adrian"
        >
          <strong>2</strong>
        </Product>
        <Product
          nombre="Curso Node.js"
          descripcion="Curso dictado por Juan y Maria"
        >
          <strong>3</strong>
        </Product> */}




      </>
    );
}
