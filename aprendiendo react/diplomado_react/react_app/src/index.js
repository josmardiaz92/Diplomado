import React from 'react';
import ReactDOM from 'react-dom/client';
import Aula from './compoentes/Aula';

/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>¡Hola Mundo!</h1>
  </React.StrictMode>
); */


const sesion=true;


/* const verificarSesion=(sesion)=>{
  if(sesion===true){
    return JSX;
  }else{
    return <h1>No Has Iniciado Sesion</h1>
  }
} */

const App=()=>(
  <>
    {sesion===true ?
      <>
        <Aula/>
      </>  
      :
      <h1>No Has Iniciado Sesion</h1>
  }
  </>
);

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>); /* asi se llama para no llamarlo como funcion js */
