import React from "react";

const TituloAzul=()=>{
    const nombre='Clase';
    const color='blue';
    return(
        <>
            <h1 style={{color:color}} >¡Hola {nombre}!</h1>
        </>
    );
};

const TituloNaranja=()=>{
    const nombre='Clase';
    const color='orange';
    return(
        <>
            <h1 style={{color:color}} >¡Hola {nombre}!</h1>
        </>
    );
};

export {TituloAzul,TituloNaranja};