import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const Cabecera = () => {
    return(
        <header className="cabecera">
            <h1 className="cabecera_titulo">Lista de continentes</h1>
            <button className="cabecera_boton">
                No mostrar activos
                <FontAwesomeIcon icon={faEyeSlash} className="cabecera_icono-boton"/>
            </button>
        </header>
    );
}
export default Cabecera;