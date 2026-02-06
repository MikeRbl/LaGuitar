import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import Card from './components/Card'
import { db } from "./db/db";


function App() {

  /*const [customer, setCustomer] = useState({});
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState([]);
  const [modal, setModal] = useState(false);
  const [count, setCount] = useState(0);

  console.log(total);

  */
 // () => setTotal(100);

 /* if (auth){
  const [modal, setModal] = useState(true);
 }else{
  const [modal, setModal] = useState(false);

 } */

  const [data, setData] = useState(db);
  console.log(data);
  
  
  /*useEffect(() => {
    setData(db);
  }, []) */

  return (
    <div>

      <Header></Header>


      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">
          {data.map(() => (
            <Card/>
          ))}
        </div>
      </main>
      <Footer></Footer>

    </div>

  )
}

export default App