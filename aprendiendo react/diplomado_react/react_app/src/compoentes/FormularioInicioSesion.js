import React, {useState} from "react";
import Boton from "../elementos/Boton";
import { Input, Label } from "../elementos/formulario";
import './FormularioInicioSesion.css';

const FormularioInicioSesion=(props)=>{
    const [usuario, cambiarUsuario]=useState('');
    const [clave, cambiarClave]=useState('');
    const CambiarEstado=(evento)=>{
        if(evento.target.name==='usuario'){
            cambiarUsuario(evento.target.value);
        }else if(evento.target.name==='clave'){
            cambiarClave(evento.target.value);
        }
    }
    const validar=(evento)=>{
        evento.preventDefault();
        if(usuario==='clase' && clave==='clase'){
            props.cambiarEstadoSesion(true);
        }else{
            alert('datos Incorrectos');
            cambiarUsuario('');
            cambiarClave('');
        }
    }
    return(
        <form action="" onSubmit={validar} className="formulario">
            <div>
                <label className="label" htmlFor="usuario" >Usuario:</label>
                <input className="input" 
                    type="text" 
                    name="usuario" 
                    id="usuario" 
                    value={usuario}
                    onChange={CambiarEstado}
                />
            </div>
            <div>
                <label className="label" htmlFor="clave">Clave:</label>
                <input className="input" 
                    type="password" 
                    name="clave" 
                    id="clave" 
                    value={clave}
                    onChange={CambiarEstado}
                />
            </div>
            <button className="boton" negro anchocompleto type="submit">Iniciar Sesión</button>
        </form>
    );
};

export default FormularioInicioSesion;