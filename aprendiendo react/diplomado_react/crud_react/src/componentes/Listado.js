import React from "react";
import Continente from "./Continente";

const Listado=({continentes})=>{
    const cambiarEstatus=(id)=>{
        console.log('Id de la tarea: ',id);
    }
    return(
        <ul className="listado">
            {
                continentes.length>0 ?
                    continentes.map((continente)=>{
                        return <Continente 
                            key={continente.id} 
                            continente={continente}
                            cambiarEstatus={cambiarEstatus}
                        />
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