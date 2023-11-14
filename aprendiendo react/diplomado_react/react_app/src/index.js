import React, {useState} from 'react'; //importando el hook useState
import ReactDOM from 'react-dom/client';
import Aula from './compoentes/Aula';
import styles from './index.module.css';
import Boton from './elementos/Boton';
import FormularioInicioSesion from './compoentes/FormularioInicioSesion';

const App=()=>{
  const [sesion, cambiarEstadoSesion] = useState(false);
  return(
    <div className={styles.contenedor}>
      {sesion===true ?
        <>
          <Aula/>
          <Boton rojo onClick={()=>cambiarEstadoSesion(false)}>Cerrar Sesión</Boton>
        </>  
        :
        <>
          <h1>No Has Iniciado Sesion</h1>
          <FormularioInicioSesion/>
          {/* <Boton verde anchocompleto onClick={()=>cambiarEstadoSesion(true)}>Iniciar Sesión</Boton> */}
        </>
      }
    </div>
  )
};

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>); /* asi se llama para no llamarlo como funcion js */
