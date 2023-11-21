import React, {useState,useEffect} from "react";

const useObtenerNoticias=()=>{
    const [noticias,establecerNoticias]=useState([]);
    const [cargando,establecerCargando]=useState(true);
    useEffect(()=>{
        setTimeout(() => {
            establecerNoticias([
                {
                    id:1,
                    titulo:'Titulo de la primera noticia'
                },
                {
                    id:2,
                    titulo:'titulo de la segunda noticia'
                },
                {
                    id:3,
                    titulo:'titulo de la tercera noticia'
                }
            ]);
            establecerCargando(false);
        }, 4000);
    },[]);
    return [noticias,cargando];
}

export default useObtenerNoticias;