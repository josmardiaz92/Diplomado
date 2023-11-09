import React from "react";

/* esta es una forma de heredar */
/* const TituloAzul=(props)=>{ 
    return(
        <>
            <h1 style={{color:props.color}} >¡Hola {props.nombre}!</h1>
        </>
    );
}; */

const Titulo=({nombre,color})=>{
    return(
        <>
            <h1 style={{color:color}} >¡Hola {nombre}!</h1>
        </>
    );
};

export default Titulo;