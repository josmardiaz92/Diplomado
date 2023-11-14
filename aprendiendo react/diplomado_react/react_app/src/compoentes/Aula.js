import React from "react";
import Titulo from "./Titulo";
import styled from 'styled-components';

const Aula=()=>{
    const clase='Diplomado de Programación';
    const instructores=['Pedro','Maria Eugenia','Vidermid','Gabriel'];
    return(
        <>
            <Titulo nombre='Josmar' color='blue'/>
            <Titulo nombre='Alejandro' color='orange'/>
            <Titulo nombre='Enrrique' color='green'/>
            <Parrafo>Te doy la bienvenida a esta Experiencia de Aprendizaje</Parrafo>
            {clase && <Parrafo>Estamos en clase del {clase}</Parrafo>}
            <h4>Estos son los Profesores:</h4>
                <ul>
                    {instructores.map((instructor,index)=>{
                    return <li key={index}>{instructor}</li>
                    })}
                </ul>
        </>
    );
};

const Parrafo=styled.p`
    margin: 10px 0;
`;

export default Aula;
