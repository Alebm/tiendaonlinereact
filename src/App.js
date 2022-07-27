
import { useState } from 'react';

import './App.css';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/counter/counter';

function App() {

  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting={'primer item del list'} />
      <button onClick={() => setShow(!show) }>Mostrar/Ocultar</button>
      {show === true ? <Counter/> : null}
    </div>
  );
}

export default App;
