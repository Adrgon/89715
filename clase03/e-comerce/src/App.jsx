import {useState, useEffect} from "react"

import Shop from "./components/Shop"


function App() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log("App montada");
    return ()=> {
      console.log("App desmontada");
    }
  }, []);

  useEffect(() => {
    console.log("App actualizado", contador);
  }, [contador]);


  

  return (
    <div>
      <button onClick={()=> setContador(contador+1)}>Contar</button>
      <Shop />
    </div>
  );
}

export default App
