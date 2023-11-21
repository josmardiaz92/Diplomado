import React, {useState} from 'react'; //importando el hook useState
import ReactDOM from 'react-dom/client';
import Aula from './compoentes/Aula';
import './index.css';
import Boton from './elementos/Boton';
import FormularioInicioSesion from './compoentes/FormularioInicioSesion';
import ContadorFuncional from './compoentes/ContadorFuncional';
import ContadorUseReducer from './compoentes/ContadorUseReducer';
import Blog from './compoentes/Blog';

const App=()=>{
  const [sesion, cambiarEstadoSesion] = useState(true);
  return(
    <div className='contenedor'>
      {sesion===true ?
        <>
          <Aula/>
          {/* <ContadorFuncional incrementar={1} disminuir={1}/> */}
          <Blog/>
          <ContadorUseReducer/>
          <Boton rojo anchocompleto onClick={()=>cambiarEstadoSesion(false)}>Cerrar Sesión</Boton>
        </>  
        :
        <>
          <h2 className='titulo'>No Has Iniciado Sesión</h2>
          <FormularioInicioSesion cambiarEstadoSesion={cambiarEstadoSesion}/>
          {/* <Boton verde anchocompleto onClick={()=>cambiarEstadoSesion(true)}>Iniciar Sesión</Boton> */}
        </>
      }
    </div>
  )
};

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>); /* asi se llama para no llamarlo como funcion js */
