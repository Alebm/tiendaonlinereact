
import { useState } from 'react';

import './App.css';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/counter/counter';

function App() {

  const [show, setShow] = useState(true);

<<<<<<< HEAD
  const handleClick = (quantity) => {
    console.log(`agrego la cantidad de : ${quantity}`);
  }

=======
>>>>>>> origin/main
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting={'primer item del list'} />
      <button onClick={() => setShow(!show) }>Mostrar/Ocultar</button>
<<<<<<< HEAD
      {show === true ? <Counter stock={10} onAdd = {handleClick} /> : null}
=======
      {show === true ? <Counter/> : null}
>>>>>>> origin/main
    </div>
  );
}

export default App;
