import hamburguer from './assets/hamburguer.png';
import { useState } from 'react';

function CardLanches({ tytle, children }){
  const [contador, setContador] = useState(0);

  function add() {
    setContador(contador + 1);
  }

  function subtrair() {
    if(contador !== 0)
      setContador(contador - 1);
  }

  return(
    <div className="card">
      <img src={hamburguer} alt="" className="hamburguer" />
      <h2>{tytle}</h2>

      <p>
        {children}
      </p>

      <div className="quantity">
        <button onClick={subtrair} className="btn-contar">-</button>
        <span>
          {contador}
        </span>
        <button onClick={add} className="btn-contar">+</button>
      </div>
    </div>
  )
}

function App() {
  
  
  return (
    <div className="App">
      <CardLanches tytle="Hanburger">
        Arcu, sagittis, ut lectus congue dapibus semper odio a, lobortis.
      </CardLanches>
    </div>
  );
}

export default App;
