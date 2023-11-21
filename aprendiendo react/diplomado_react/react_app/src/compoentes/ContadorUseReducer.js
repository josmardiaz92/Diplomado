import React, {useReducer} from "react";
import './Contador.css';

const contadorInicial={contador:0};
const reducer=(estado,accion)=>{
    switch (accion.tipo) {
        case 'INCREMENTAR':
            return {contador:estado.contador+1}
        break;
        case 'DISMINUIR':
            return {contador:estado.contador-1}
        break;
        case 'REINICIAR':
            return {contador:0}
        break;
        default:
            return estado;
    }
}

const ContadorUseReducer=()=>{
    const [estado,dispatch]=useReducer(reducer,contadorInicial);
    return (
        <div>
            <h2>Esta es la clase número {estado.contador}</h2>
            <button className="boton-contador" onClick={()=>dispatch({tipo: 'INCREMENTAR'})}>Incrementar</button>
            <button className="boton-contador" onClick={()=>dispatch({tipo: 'DISMINUIR'})}>Disminuir</button>
            <button className="boton-contador" onClick={()=>dispatch({tipo: 'REINICIAR'})}>Reiniciar</button>
        </div>
    )
}

export default ContadorUseReducer;