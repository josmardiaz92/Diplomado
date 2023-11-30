import React from "react";
import Continente from "./Continente";

const Listado=({continentes, cambiarContinentes, mostrarActivos})=>{
    const cambiarEstatus=(id)=>{
        cambiarContinentes(continentes.map((continente)=>{
            if(continente.id===id){
                if(continente.estatus==='I'){
                    return {...continente,estatus:'A'}
                }else if(continente.estatus==='A'){
                    return{...continente, estatus:'I'}
                }
            }
            return continente;
        }));
    }
    const editarContinente=(id, nuevoNombre)=>{
        cambiarContinentes(continentes.map(((continente)=>{
            if(continente.id===id){
                return {...continente,nombre:nuevoNombre}
            }
            return continente;
        })));
    }
    const eliminarContinente=(id)=>{
        cambiarContinentes(continentes.filter((continente)=>{
            if(continente.id!==id){
                return continente;
            }
            return;
        }));
    }
    return(
        <ul className="listado">
            {
                continentes.length>0 ?
                    continentes.map((continente)=>{
                        if(mostrarActivos===true){
                            return <Continente 
                                        key={continente.id} 
                                        continente={continente}
                                        cambiarEstatus={cambiarEstatus}
                                        editarContinente={editarContinente}
                                        eliminarContinente={eliminarContinente}
                                    />
                        }else if(continente.estatus==='I'){
                            return <Continente 
                                key={continente.id} 
                                continente={continente}
                                cambiarEstatus={cambiarEstatus}
                                editarContinente={editarContinente}
                                eliminarContinente={eliminarContinente}
                            />
                        }
                        return;                      
                    })
                :
                    <div className="listado_mensaje">
                        No hay Continentes Agregados
                    </div>
            }
        </ul>
    )
}
export default Listado;