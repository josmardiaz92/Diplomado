function pais_listar(){
    fetch('http://localhost:3000/pais')
    .then((response)=>response.json())
    .then((paises)=>{
        
        const tablaPais=document.getElementById('tablaPais');
        const body=tablaPais.querySelector('tbody');
        paises.forEach(pais=>{
            
            let tr=document.createElement('tr');

            let tdCodigo=document.createElement('td');
            tdCodigo.textContent=`${pais.cod_pai}`;
            tr.appendChild(tdCodigo);

            let tdNombre=document.createElement('td');
            tdNombre.textContent=`${pais.nom_pai}`;
            tr.appendChild(tdNombre);

            let tdDescripcion=document.createElement('td');
            tdDescripcion.textContent=`${pais.des_pai}`;
            tr.appendChild(tdDescripcion);

            let tdAlias=document.createElement('td');
            tdAlias.textContent=`${pais.ali_pai}`;
            tr.appendChild(tdAlias);

            let tdCti=document.createElement('td');
            tdCti.textContent=`${pais.cti_pai}`;
            tr.appendChild(tdCti);

            let tdContinente=document.createElement('td');
            tdContinente.textContent=`${pais.nom_con}`;
            tr.appendChild(tdContinente);

            let tdEstatus=document.createElement('td');
            tdEstatus.textContent+=`${pais.est_pai}`;
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

pais_listar();