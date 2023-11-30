import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
const Cabecera = ({mostrarActivos, cambiarMostrarActivos}) => {
    const cambiarMuestreo=()=>{
        cambiarMostrarActivos(!mostrarActivos);
    }
    return(
        <header className="cabecera">
            <h1 className="cabecera_titulo">Lista de continentes</h1>
            {mostrarActivos ?
                <button className="cabecera_boton" onClick={()=>cambiarMuestreo()}>
                    No mostrar activos
                    <FontAwesomeIcon icon={faEyeSlash} className="cabecera_icono-boton"/>
                </button>    
            :
                <button className="cabecera_boton" onClick={()=>cambiarMuestreo()}>
                    Mostrar activos
                    <FontAwesomeIcon icon={faEye} className="cabecera_icono-boton"/>
                </button> 
            }
            
        </header>
    );
}
export default Cabecera;