import React, {useState} from "react";

const FormularioInicioSesion=()=>{
    const [usuario, cambiarUsuario]=useState('');
    const [clave, cambiarClave]=useState('');
    return(
        <form action="">
            <p>Usuario: {usuario} </p>
            <p>Contraseña: {clave} </p>
            <div>
                <label htmlFor="usuario" >Usuario</label>
                <input type="text" name="usuario" id="usuario" value={usuario}/>
            </div>
            <div>
                <label htmlFor="clave">Clave</label>
                <input type="password" name="clave" id="clave" value={clave}/>
            </div>
            <button type="submit">Iniciar Sesión</button>
        </form>
    );
};

export default FormularioInicioSesion;