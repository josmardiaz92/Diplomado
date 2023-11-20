import React, {useState} from 'react'; //importando el hook useState
import ReactDOM from 'react-dom/client';
import Aula from './compoentes/Aula';
import styles from './index.module.css';
import Boton from './elementos/Boton';
import FormularioInicioSesion from './compoentes/FormularioInicioSesion';
import Contadorclass from './compoentes/ContadorClass';
import Contador from './compoentes/Contador';
import ContadorFuncional from './compoentes/ContadorFuncional';
import H1 from './elementos/Titulo';
import Contenedor from './elementos/contenedor';

const App=()=>{
  const [sesion, cambiarEstadoSesion] = useState(true);
  return(
    <Contenedor>
      {sesion===true ?
        <>
          <Aula/>
          {/* <ContadorFuncional incrementar={1} disminuir={1}/> */}
          <ContadorFuncional incrementar={1} disminuir={1}/>
          <Boton rojo anchocompleto onClick={()=>cambiarEstadoSesion(false)}>Cerrar Sesión</Boton>
        </>  
        :
        <>
          <H1>No Has Iniciado Sesión</H1>
          <FormularioInicioSesion cambiarEstadoSesion={cambiarEstadoSesion}/>
          {/* <Boton verde anchocompleto onClick={()=>cambiarEstadoSesion(true)}>Iniciar Sesión</Boton> */}
        </>
      }
    </Contenedor>
  )
};

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>); /* asi se llama para no llamarlo como funcion js */
