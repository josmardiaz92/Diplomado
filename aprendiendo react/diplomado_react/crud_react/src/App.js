import React, {useState,useEffect} from 'react';
import './App.css';
import Cabecera from './componentes/Cabecera';
import Formulario from './componentes/Formulario';
import Listado from './componentes/Listado';
import Continente from './componentes/Continente';

const App = () => {
    const continentesGuardados=
        localStorage.getItem("continentes") ?
            JSON.parse(localStorage.getItem("continentes")) : [];

    const [continentes, cambiarContinentes] = useState(continentesGuardados);

    useEffect(()=>{
        localStorage.setItem("continentes", JSON.stringify(continentes));
    },[continentes]);

    let configMostrarActivos='';
    if(localStorage.getItem('mostrarActivos')===null){
        configMostrarActivos=true;
    }else{
        configMostrarActivos=localStorage.getItem('mostrarActivos')==='true';
    }

    const [mostrarActivos, cambiarMostrarActivos] = useState(configMostrarActivos);

    useEffect(()=>{
        localStorage.setItem('mostrarActivos', mostrarActivos.toString());
    },[mostrarActivos]);

    return (
        <div className='contenedor'>
            <Cabecera mostrarActivos={mostrarActivos} cambiarMostrarActivos={cambiarMostrarActivos} />
            <Formulario continentes={continentes} cambiarContinentes={cambiarContinentes}/>
            <Listado continentes={continentes} cambiarContinentes={cambiarContinentes} mostrarActivos={mostrarActivos} />
        </div>
    );
}
export default App;