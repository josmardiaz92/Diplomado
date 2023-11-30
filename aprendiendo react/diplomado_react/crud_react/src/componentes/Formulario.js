import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import {v4 as uuidv4 } from 'uuid';
const Formulario = ({continentes,cambiarContinentes}) => {
    const [nombreContinente, cambiarNombreContinente] = useState("");
    const cambiarValorInput = (e) => {
        cambiarNombreContinente(e.target.value);
    }
    const prevenirEnvio = (e) => {
        e.preventDefault();
        cambiarContinentes(
            [
                ...continentes,
                {
                    id: uuidv4(),
                    nombre: nombreContinente,
                    estatus: "A"
                }
            ]
        );
        cambiarNombreContinente('');
    }
    return(
        <form action="" className="formulario" onSubmit={prevenirEnvio}>
            <input 
                type="text" 
                className="formulario_input" 
                placeholder="Escribe un Continente"
                value={nombreContinente}
                onChange={(e) => cambiarValorInput(e)}
            />
            <button type="submit" className="formulario_boton">
                <FontAwesomeIcon icon={faSquarePlus} className="formulario_icono-boton"/>
            </button>
        </form>
    );
}
export default Formulario;