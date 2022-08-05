import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Counter from "./components/counter/counter";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from 'react-router-dom'



=======
>>>>>>> 66058a49899ea62a3dfd33ba856520dd35cc2201
//import MercadoLibre from "./components/mercadolibre/MercadoLibre";

function App() {
  const [show, setShow] = useState(true);

  const handleClick = (quantity) => {
    console.log(`agrego la cantidad de : ${quantity}`);
  };

  return (
    <div className="App">
<<<<<<< HEAD
      <BrowserRouter>
        <Navbar />
        <div className="page">
          <Routes>
            <Route path="/" element={<ItemListContainer listTitle={"Lista de Autos"}/>}/>
            <Route path="/detail" element={<ItemDetailContainer/>}/>
          </Routes>
          <div>
            {/* <MercadoLibre listTitle={"Lista de Autos"} /> */}
            {show === true ? <Counter stock={10} onAdd={handleClick} /> : null}
            <button onClick={() => setShow(!show)}>Mostrar/Ocultar</button>
          </div>
=======
      <Navbar />
      <div className="page">
        <ItemListContainer listTitle={"Lista de Autos"} />
        <ItemDetailContainer/>
        <button onClick={() => setShow(!show)}>Mostrar/Ocultar</button>
        {show === true ? <Counter stock={10} onAdd={handleClick} /> : null}
        <div>
          {/* <MercadoLibre listTitle={"Lista de Autos"} /> */}
>>>>>>> 66058a49899ea62a3dfd33ba856520dd35cc2201
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
