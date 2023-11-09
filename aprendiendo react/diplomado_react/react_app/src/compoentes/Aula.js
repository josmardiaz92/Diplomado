import React from "react";
import { TituloAzul,TituloNaranja } from "./Titulo";
const Aula=()=>{
    const clase='Diplomado de Programación';
    const instructores=['Pedro','Maria Eugenia','Vidermid','Gabriel'];
    return(
        <>
            <TituloAzul/>
            <TituloNaranja/>
            <p>Te doy la bienvenida a esta Experiencia de Aprendizaje</p>
            {clase && <p>Estamos en clase del {clase}</p>}
            <h4>Estos son los Profesores:</h4>
                <ul>
                    {instructores.map((instructor,index)=>{
                    return <li key={index}>{instructor}</li>
                    })}
                </ul>
        </>
    );
};

export default Aula;
