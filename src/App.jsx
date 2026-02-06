// src/App.jsx
import { useState, useEffect } from 'react'
import Header from './components/Header' // Asegúrate de importar tus componentes
import Footer from './components/Footer'
import Guitar from './components/Guitar'
import { db } from './data/db' // Importamos la base de datos simulada

function App() {

  // State para guardar la data (inicializamos con la base de datos)
  const [data, setData] = useState(db)

  return (
    <>
      <Header />

      <main className="container-xl mt-5">
          <h2 className="text-center">Nuestra Colección</h2>

          {/* El div 'row' es CRUCIAL para que el grid de bootstrap funcione */}
          <div className="row mt-5">
              {data.map((guitar) => (
                  <Guitar 
                      key={guitar.id} // Siempre necesita un key único
                      guitar={guitar} // Pasamos el objeto entero como prop
                  />
              ))}
          </div>
      </main>

      <Footer />
    </>
  )
}

export default App