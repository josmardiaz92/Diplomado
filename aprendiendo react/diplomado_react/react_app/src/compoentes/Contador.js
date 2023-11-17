import React, {useState} from "react";

const Contador=(props)=>{
    const incrementar=props.incrementar;
    const disminuir=props.disminuir;
    const [contador, setContador]=useState(0);
    const incrementarContador=()=>{
        setContador(contador + incrementar);
    };
    const disminuirContador=()=>{
        if(contador>0){
            setContador(contador - disminuir);
        }else{
            setContador(contador);
        }
    };
    return (
        <div>
            <h2>Esta es la calse número {contador}</h2>
            <button onClick={incrementarContador}>Incrementar</button>
            <button onClick={disminuirContador}>Disminuir</button>
        </div>
    );
};

export default Contador;