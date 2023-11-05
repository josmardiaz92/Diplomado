function zona_horaria_listar(){
    fetch('http://localhost:3000/zona_horaria')
    .then((response)=>response.json())
    .then((zonas_horarias)=>{
        
        const tablaZonaHoraria=document.getElementById('tablaZonaHoraria');
        const body=tablaZonaHoraria.querySelector('tbody');
        zonas_horarias.forEach(zona_horaria=>{
            
            let tr=document.createElement('tr');

            let tdCodigo=document.createElement('td');
            tdCodigo.textContent=`${zona_horaria.cod_zon}`;
            tr.appendChild(tdCodigo);

            let tdNombre=document.createElement('td');
            tdNombre.textContent=`${zona_horaria.nom_zon}`;
            tr.appendChild(tdNombre);

            let tdAcronimo=document.createElement('td');
            tdAcronimo.textContent=`${zona_horaria.acr_zon}`;
            tr.appendChild(tdAcronimo);

            let tdDiferenciaHoraria=document.createElement('td');
            tdDiferenciaHoraria.textContent=`${zona_horaria.dif_zon}`;
            tr.appendChild(tdDiferenciaHoraria);

            let tdEstatus=document.createElement('td');
            tdEstatus.textContent+=`${zona_horaria.est_zon}`;
            tr.appendChild(tdEstatus);

            let tdAcciones=document.createElement('td');

            let aEditar=document.createElement('a');
            aEditar.classList.add('text-info','text-decoration-none');
            aEditar.href='#';
            let iEditar=document.createElement('i');
            iEditar.classList.add('fa-solid','fa-pen-to-square');
            iEditar.style="color: #7599d7;";
            aEditar.appendChild(iEditar);
            tdAcciones.appendChild(aEditar);

            let span=document.createElement('span');
            span.textContent=' | ';
            tdAcciones.appendChild(span);

            let aEliminar=document.createElement('a');
            aEliminar.classList.add('text-danger','text-decoration-none');
            aEliminar.href='#';
            let iEliminar=document.createElement('i');
            iEliminar.classList.add('fa-solid','fa-trash');
            iEliminar.style="color: #ab0707;";
            aEliminar.appendChild(iEliminar);
            tdAcciones.appendChild(aEliminar);

            tr.appendChild(tdAcciones);
            body.appendChild(tr);
        })
    })
}

zona_horaria_listar();