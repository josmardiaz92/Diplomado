import React, {useState,useEffect} from "react";
import './Contador.css';

const ContadorFuncional=(props)=>{
    const [contador, cambiarContador]=useState(0);
    useEffect(()=>{
        console.log('Se ha renderizado el componente');
    });
    useEffect(()=>{
        console.log('Se ha renderizado el componente por primera vez');
    },[]);
    useEffect(()=>{
        console.log('Se ha cambiado el estado del contador');
    },[contador]);
    useEffect(()=>{
        return(()=>{
            console.log('el componente ha dejado de mostrarse en la app');
        });
    },[]);
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
            <button className="boton-contador" onClick={()=>incrementar(props.incrementar)}>Incrementar</button>
            <button className="boton-contador" onClick={()=>disminuir(props.disminuir)}>Disminuir</button>
        </div>
    );
}

export default ContadorFuncional;