import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faPenToSquare, faTrash, faSquare } from '@fortawesome/free-solid-svg-icons';

const Continente=({continente, cambiarEstatus, editarContinente, eliminarContinente})=>{
    const [editandoContienente, cambiarEditandoContinente]=useState(false);
    const [nuevoContinente, cambiarNuevoContinente]=useState(continente.nombre);
    const prevenirEnvio=(e)=>{
        e.preventDefault();
        editarContinente(continente.id, nuevoContinente)
        cambiarEditandoContinente(false);
    }
    return(
        <li className="listado_continente">
            <FontAwesomeIcon
                icon={continente.estatus==='A' ? faCheckSquare : faSquare}
                className="listaod_icono listado_icono-check"
                onClick={()=>cambiarEstatus(continente.id)}
            />
            <div className="listado_texto">
                {
                    editandoContienente ?
                        <form 
                            action=""
                            className="formulario-editar-continente"
                            onSubmit={prevenirEnvio}
                        >
                            <input 
                                type="text" 
                                className="formulario-editar-continente_input"
                                value={nuevoContinente}
                                onChange={(e)=>cambiarNuevoContinente(e.target.value)}
                            />
                            <button 
                                type="submit" 
                                className="formulario-editar-continente_btn"
                            >
                                Actualizar
                            </button>
                        </form>
                    : 
                    continente.nombre
                }
            </div>
            <div className="listado_contenedor-botones">
                <FontAwesomeIcon
                    icon={faPenToSquare}
                    className="listado_icono listado_icono_accion"
                    onClick={()=>cambiarEditandoContinente(!editandoContienente)}
                />
                <FontAwesomeIcon
                    icon={faTrash}
                    className="listado_icono listado_icono_accion"
                    onClick={()=>eliminarContinente(continente.id)}
                />
            </div>
        </li>
    );
}
export default Continente