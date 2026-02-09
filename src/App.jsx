import './App.css'
import Header from './Componentes/Header'
import Footer from './Componentes/Footer'
import Card from './Componentes/Card'
import { db } from '../src/db/db'
import { useState, useEffect } from 'react'

function App() {
  // 1. Función para obtener el estado inicial del localStorage
  const initialCart = () => {
    const localStorageCart = localStorage.getItem('cart')
    return localStorageCart ? JSON.parse(localStorageCart) : []
  }

  const [customer, setCustomer] = useState({})
  const [total, setTotal] = useState(0)
  const [products, setProducts] = useState([])
  const [modal, setModal] = useState(false)
  const [data, setData] = useState(db)
  
  // 2. Inicializar el carrito con la función initialCart
  const [cart, setCart] = useState(initialCart)

  // 3. useEffect para persistir los datos cada vez que el carrito cambie
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <div>
      <Header
        cart={cart}
        setCart={setCart}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map(guitar => (
            <Card
              key={guitar.id}
              guitar={guitar}
              cart={cart}
              setCart={setCart}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App