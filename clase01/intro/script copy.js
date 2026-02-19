function Tarjeta({titulo, descripcion}){
  //const {titulo} = props
  console.log(titulo)
  return (
    <div className="card">
      <h2>{titulo}</h2>
      <p>{descripcion ? descripcion : "Este curso se dicta en coderhouse"}</p>
      <button>Ver mas</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Tarjeta titulo="Curso React" descripcion="Este curso esta dictado por Paola y Adrian" />
      <Tarjeta titulo="Curso Angular" />
      <Tarjeta titulo="Curso Vue" />
      <Tarjeta titulo="Curso Javascript" />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
