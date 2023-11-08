import React from 'react';
import ReactDOM from 'react-dom/client';

/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>¡Hola Mundo!</h1>
  </React.StrictMode>
); */

const nombre='Clase';
const color='blue';
const sesion=true;
const clase='Diplomado de Programación';
const instructores=['Pedro','Maria Eugenia','Vidermid','Gabriel'];
const JSX=(
  <>
    {sesion===true ?
    <>
      <h1 style={{color:color}} >¡Hola {nombre}!</h1> {/* Asi se llaman las variables dentro de JSX */}
      <p>Te doy la bienvenida a esta Experiencia de Aprendizaje</p>
      {clase && <p>Estamos en clase del {clase}</p>} {/* en caso de estar definida, se muestra, es similar al terniario */}
      <h4>Estos son los Profesores:</h4>
      <ul>
        {instructores.map((instructor,index)=>{
          return <li key={index}>{instructor}</li>
        })}
      </ul>
    </>
    :
    <h1>No Has Iniciado Sesion</h1>
    }
  </>
);
const verificarSesion=(sesion)=>{
  if(sesion===true){
    return JSX;
  }else{
    return <h1>No Has Iniciado Sesion</h1>
  }
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(JSX)
