//import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
//import Counter from "./components/counter/counter";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

import { BrowserRouter, Routes, Route } from 'react-router-dom'



//import MercadoLibre from "./components/mercadolibre/MercadoLibre";

function App() {
  //const [show, setShow] = useState(true);

  /* const handleClick = (quantity) => {
    console.log(`agrego la cantidad de : ${quantity}`);
  }; */

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="page">
          <Routes>
            <Route path="/" element={<ItemListContainer listTitle={"Lista de Autos"}/>}/>
            <Route path="/category/:categoryId" element={<ItemListContainer listTitle={ 'Listado de' } />} />
            <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
            {/* <Route path="*" element={<h1> 404 Not Found </h1>}/> */}
          </Routes>
          <div>
            {/* <MercadoLibre listTitle={"Lista de Autos"} /> */}
            {/* {show === true ? <Counter stock={10} onAdd={handleClick} /> : null}
            <button onClick={() => setShow(!show)}>Mostrar/Ocultar</button> */}
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App; 
