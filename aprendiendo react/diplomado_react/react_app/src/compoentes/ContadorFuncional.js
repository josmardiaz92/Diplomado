import React, {useState} from "react";
import Boton from "../elementos/Boton";

const ContadorFuncional=(props)=>{
    const [contador, cambiarContador]=useState(0);
    const incrementar=(cantidad)=>{
        cambiarContador(contador+cantidad);
    }
    const disminuir=(cantidad)=>{
        if(contador>0){
            cambiarContador(contador-cantidad);
        }else{
            cambiarContador(contador);
        }
    }
    return(
        <div>
            <h2>Esta es la calse número {contador}</h2>
            <Boton negro anchomedio margen onClick={()=>incrementar(props.incrementar)}>Incrementar</Boton>
            <Boton negro anchomedio margen onClick={()=>disminuir(props.disminuir)}>Disminuir</Boton>
        </div>
    );
}

export default ContadorFuncional;