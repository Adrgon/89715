function Modal() {
  return (
    <div id="modal" className="modal">
      <div className="modal-content">
        <p id="modal-text"></p>
        <button onClick={cerrarModal}>Cerrar</button>
      </div>
    </div>
  )
}



function Tarjeta({titulo, descripcion="Curso dictado por coderhouse", boton}){
  //const {titulo} = props
  console.log(titulo)
/*   
const mostrarAlerta = () => {
    alert("Mas informacion " + titulo)
  } 
*/

const abrirModal = () => {
  document.getElementById("modal-text").innerText =
    "Más información sobre: " + titulo;
  document.getElementById("modal").classList.add("active");
};



  return (
    <div className="card">
      <h2>{titulo}</h2>
      <p>{descripcion }</p>
      <button onClick={abrirModal}>{boton}</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Tarjeta
        titulo="Curso React"
        descripcion="Este curso esta dictado por Paola y Adrian"
        boton="Ver mas"
      />
      <Tarjeta
        titulo="Curso Angula"
        boton="Ver mas"
      />
      <Tarjeta
        titulo="Curso Javascript"
        boton="Ver mas"
      />
      <Modal />
    </div>
  );
}

  function cerrarModal() {
    document.getElementById("modal").classList.remove("active");
  }


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
