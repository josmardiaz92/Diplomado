function continente_listar(){
    fetch('http://localhost:3000/pais_agregar')
    .then((response)=>response.json())
    .then((continentes)=>{
        const selecContinente=document.getElementById('fky_con');
        continentes.forEach(continente=>{
            let option=document.createElement('option');
            option.value=`${continente.cod_con}`;
            option.textContent=`${continente.nom_con}`;
            selecContinente.appendChild(option);
        })
    })
};

continente_listar();