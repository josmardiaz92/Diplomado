import React, {useState,useEffect} from "react";
import styled from "styled-components";
import useObtenerNoticias from "../hooks/useObtenerNoticias";

const Blog=()=>{
    const [noticias,cargando]=useObtenerNoticias();
    return(
        <ContenedorBlog>
            <Titulo>Blog</Titulo>
            {cargando===true ?
                <p>Cargando...</p>
                :
                <div>
                    {noticias.map((noticia)=>{
                        return <Noticia key={noticia.id}>{noticia.titulo}</Noticia>
                    })}
                </div>
            }       
        </ContenedorBlog>
    );
}

const ContenedorBlog=styled.div`
    margin: 30px 0 30px 0;
`;
const Titulo=styled.h2`
    text-align: center;
    margin-bottom: 10px;
`;
const Noticia=styled.p`
    padding: 10px 0;
    margin-bottom: 10px;
    border-bottom: 1px solid #ccc;
`;

export default Blog;