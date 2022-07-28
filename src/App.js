
import { useState } from 'react';

import './App.css';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/counter/counter';

function App() {

  const [show, setShow] = useState(true);

  const handleClick = (quantity) => {
    console.log(`agrego la cantidad de : ${quantity}`);
  }

  return (
    <div className="App">
      <Navbar/>
      <div className='page'>
        <ItemListContainer greeting={'primer item del list'} />
        <button onClick={() => setShow(!show) }>Mostrar/Ocultar</button>
        {show === true ? <Counter stock={10} onAdd = {handleClick} /> : null}
      </div>
    </div>
  );
}

export default App;
