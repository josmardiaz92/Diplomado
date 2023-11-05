function estado_listar(){
    fetch('http://localhost:3000/estado')
    .then((response)=>response.json())
    .then((estados)=>{
        
        const tablaEstado=document.getElementById('tablaEstado');
        const body=tablaEstado.querySelector('tbody');
        estados.forEach(estado=>{
            
            let tr=document.createElement('tr');

            let tdCodigo=document.createElement('td');
            tdCodigo.textContent=`${estado.cod_est}`;
            tr.appendChild(tdCodigo);

            let tdNombre=document.createElement('td');
            tdNombre.textContent=`${estado.nom_est}`;
            tr.appendChild(tdNombre);

            let tdDescripcion=document.createElement('td');
            tdDescripcion.textContent=`${estado.des_est}`;
            tr.appendChild(tdDescripcion);

            let tdPais=document.createElement('td');
            tdPais.textContent=`${estado.nom_pai}`;
            tr.appendChild(tdPais);

            let tdEstatus=document.createElement('td');
            tdEstatus.textContent+=`${estado.est_est}`;
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

estado_listar();