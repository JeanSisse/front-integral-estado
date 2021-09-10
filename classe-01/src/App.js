import { useState } from 'react';

import close from './assets/close.svg';
import cookie from './assets/cookie.svg';
import alert from './assets/alert.svg';

import './index.css'

function AlertCard({ type, message, children}) {
  const [ visibilidade, setVisibilidade]  = useState("visivel");

  function esconderAlerta() {
    const classe = visibilidade === "visivel" ? "esconder-alerta" : "";
    setVisibilidade(classe);
  }

  return (
    <div className={`card ${visibilidade}`}>
      <img src={close} alt="fechar" className="close-button" />
      <img 
        className="icon" 
        src={type === "cookie" ? cookie : alert}
        alt={type === "cookie" ? "Cookie" : "Alerta"}
      />

      <p>
        {children}
      </p>

      <button className={type} onClick={esconderAlerta}>
        {message}
      </button>
    </div>
  )
}

function App() {

  return (
    <div className="App">
      <AlertCard type="cookie" message="Tudo bem!">
        Nós utilizamos cookies para melhorar nossa UX, analytics e marketing.
      </AlertCard>

      <AlertCard type="alert" message="Extender login">
        Você será deslogado <br /> imediatamente!.
      </AlertCard>
    </div>
  );
}

export default App;
