import { useEffect, useState } from 'react'
import {db} from './services/firebase'
import { addDoc, collection, getDocs, orderBy, query } from 'firebase/firestore'

const productsCollection = collection(db, 'products');

function App() {
  const [products, setProducts] = useState([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Montaje de la app

  // useEffect --> fetch de productos
  // Firestore --> devuelve documentos
  // setProducts guarda los datos (useState)
  // React renderiza una lista

  const fetchProducts = async () => {
    console.log('solicitando productos...')
    setLoading(true)
    setError('');

    try {
      const q = query(productsCollection, orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q)
      //console.log(snapshot)
      const docs = snapshot.docs.map((doc)=>({
        id: doc.id,
        ...doc.data(),
      }))

      setProducts(docs)
    } catch (error) {
      console.log(error)
      setError('No se pudieron cargar los productos')
    } finally {
      setLoading(false)
    }
  }

  useEffect(()=>{
    fetchProducts()
  }, [])


  // Agregar un producto a la base de datos
  // Usuario completa un formulario
  // HandleAddProduct 
  // addDoc gurada en Firestore
  // fetchProducts volver a consultarlos
  // setProducts actualizar la lista (useState)
  // React renderiza la lista actualizada

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!name.trim() || !price.trim()) {
      setError('Campos obligatorios')
      return
    }
    setError('')

    try {
      await addDoc(productsCollection, {
        name: name.trim(),
        price: Number(price),
        createdAt: Date.now(),
      })
      setName('')
      setPrice('')
      fetchProducts()
    }
    catch(error){
      console.log(error)
      setError('No se pudo agregar el producto')
    }
  }

  return (
    <main className='container'>
      <h1>React + Firestore</h1>
      <p className='subtitle'>Consulta de productos y agraga nuevos registros</p>
    
      <form className='form' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Nombre de producto'
          value={name}
          onChange={(e)=> setName(e.target.value)}
        />
        <input
          type='number'
          placeholder='Precio'
          value={price}
          onChange={(e)=> setPrice(e.target.value)}
        />
        <button type='submit'>Agregar producto</button>
      </form>

      {error && <p className='error'>{error}</p>}

      <section>
        <div className='header-row'>
          <h2>Productos</h2>
          <button onClick={fetchProducts} disabled={loading}>{loading ? 'Cargando' : 'Recargar'}</button>
        </div>

        {loading ? 
        (
          <p>cargando productos ...</p>
        ) : products.length === 0 ? (
          <p>No hay productos registrados</p>
        ) : (
          <ul className='list'>
            {products.map((product)=>(
              <li key={product.id} className='item'>
                <span>{product.name}</span>
                <strong>{product.price}</strong>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  )
}

export default App
