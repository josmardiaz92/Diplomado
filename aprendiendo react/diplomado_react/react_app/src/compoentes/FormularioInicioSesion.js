import React, {useState} from "react";
import Boton from "../elementos/Boton";
import { Input, Label } from "../elementos/formulario";

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
        <form action="" onSubmit={validar}>
            <div>
                <Label htmlFor="usuario" >Usuario:</Label>
                <Input 
                    type="text" 
                    name="usuario" 
                    id="usuario" 
                    value={usuario}
                    onChange={CambiarEstado}
                />
            </div>
            <div>
                <Label htmlFor="clave">Clave:</Label>
                <Input 
                    type="password" 
                    name="clave" 
                    id="clave" 
                    value={clave}
                    onChange={CambiarEstado}
                />
            </div>
            <Boton negro anchocompleto type="submit">Iniciar Sesión</Boton>
        </form>
    );
};

export default FormularioInicioSesion;