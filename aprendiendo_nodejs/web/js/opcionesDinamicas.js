const selecContinente=document.getElementById('fky_con',null);
const selecPais=document.getElementById('fky_pai',null);
const selecEstado=document.getElementById('fky_est',null);
const selecZonaHoraria=document.getElementById('fky_zon',null);

if(selecContinente){
    continente_listar();
}
if(selecPais){
    pais_listar();
}
if(selecEstado){
    estado_listar();
}
if(selecZonaHoraria){
    zona_horaria_listar();
}

function continente_listar(){
    fetch('http://localhost:3000/pais_agregar')
    .then((response)=>response.json())
    .then((continentes)=>{
        continentes.forEach(continente=>{
            let option=document.createElement('option');
            option.value=`${continente.cod_con}`;
            option.textContent=`${continente.nom_con}`;
            selecContinente.appendChild(option);
        })
    })
};
function pais_listar(){
    fetch('http://localhost:3000/estado_agregar')
    .then((response)=>response.json())
    .then((paises)=>{
        paises.forEach(pais=>{
            let option=document.createElement('option');
            option.value=`${pais.cod_pai}`;
            option.textContent=`${pais.nom_pai}`;
            selecPais.appendChild(option);
        })
    })
};
function estado_listar(){
    fetch('http://localhost:3000/ciudad_agregar')
    .then((response)=>response.json())
    .then((datos)=>{
        datos.estados.rows.forEach(estado=>{
            let option=document.createElement('option');
            option.value=`${estado.cod_est}`;
            option.textContent=`${estado.nom_est}`;
            selecEstado.appendChild(option);
        })
    })
};
function zona_horaria_listar(){
    fetch('http://localhost:3000/ciudad_agregar')
    .then((response)=>response.json())
    .then((datos)=>{
        datos.zonas_horarias.rows.forEach(zona_horaria=>{
            let option=document.createElement('option');
            option.value=`${zona_horaria.cod_zon}`;
            option.textContent=`${zona_horaria.nom_zon}`;
            selecZonaHoraria.appendChild(option);
        })
    })
};