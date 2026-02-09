import React from 'react'
import Carrito from './Carrito.jsx'
// Importar las imágenes directamente
import logo from '/img/logo.svg' 
import iconoCarrito from '/img/carrito.png'

export default function Header({ cart, setCart }) {
  return (
    <header className="py-5 header">
      <div className="container-xl">
        <div className="row justify-content-center justify-content-md-between">
          <div className="col-8 col-md-3">
            <a href="/">
              <img 
                className="img-fluid" 
                src={logo} // Usar la variable importada
                alt="imagen logo" 
              />
            </a>
          </div>
          <nav className="col-md-6 mt-5 d-flex align-items-start justify-content-end">
            <div className="carrito">
              <img 
                className="img-fluid" 
                src={iconoCarrito} // Usar la variable importada
                alt="imagen carrito" 
              />
              <Carrito cart={cart} setCart={setCart} />
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}