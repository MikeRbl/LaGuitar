import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'
import { db } from "./db/db"

function App() {

  // 1. Inicializamos la data con tu "base de datos"
  const [data] = useState(db)
  
  // 2. Estado para el carrito (necesario porque Card lo usa)
  const [cart, setCart] = useState([])

  return (
    <>
      {/* Pasamos cart al Header si planeas mostrar el total allí más adelante */}
      <Header />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar) => (
            <Card 
              key={guitar.id}
              guitar={guitar} // <--- ESTO FALTABA: Pasar el objeto guitarra
              cart={cart}     // <--- Necesario para la lógica de tu Card
              setCart={setCart}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  )
}

export default App