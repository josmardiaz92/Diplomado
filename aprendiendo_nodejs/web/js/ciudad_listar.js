function ciudad_listar(){
    fetch('http://localhost:3000/ciudad')
    .then((response)=>response.json())
    .then((ciudades)=>{
        
        const tablaCiudad=document.getElementById('tablaCiudad');
        const body=tablaCiudad.querySelector('tbody');
        ciudades.forEach(ciudad=>{
            
            let tr=document.createElement('tr');

            let tdCodigo=document.createElement('td');
            tdCodigo.textContent=`${ciudad.cod_ciu}`;
            tr.appendChild(tdCodigo);

            let tdNombre=document.createElement('td');
            tdNombre.textContent=`${ciudad.nom_ciu}`;
            tr.appendChild(tdNombre);

            let tdDescripcion=document.createElement('td');
            tdDescripcion.textContent=`${ciudad.des_ciu}`;
            tr.appendChild(tdDescripcion);

            let tdEstado=document.createElement('td');
            tdEstado.textContent=`${ciudad.nom_est}`;
            tr.appendChild(tdEstado);

            let tdZonaHoraria=document.createElement('td');
            tdZonaHoraria.textContent=`${ciudad.nom_zon}`;
            tr.appendChild(tdZonaHoraria);

            let tdEstatus=document.createElement('td');
            tdEstatus.textContent+=`${ciudad.est_ciu}`;
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

ciudad_listar();