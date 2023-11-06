continente_listar();

function continente_listar() {
    fetch('http://localhost:3000/continente')
        .then((response) => response.json())
        .then((continentes) => {

            const tablaContinente = document.getElementById('tablaContinente');
            const body = tablaContinente.querySelector('tbody');
            continentes.forEach(continente => {

                let tr = document.createElement('tr');

                let tdCodigo = document.createElement('td');
                tdCodigo.textContent = `${continente.cod_con}`;
                tr.appendChild(tdCodigo);

                let tdNombre = document.createElement('td');
                tdNombre.textContent = `${continente.nom_con}`;
                tr.appendChild(tdNombre);

                let tdDescripcion = document.createElement('td');
                tdDescripcion.textContent = `${continente.des_con}`;
                tr.appendChild(tdDescripcion);

                let tdEstatus = document.createElement('td');
                tdEstatus.textContent += `${continente.est_con}`;
                tr.appendChild(tdEstatus);

                let tdAcciones = document.createElement('td');

                let aEditar = document.createElement('a');
                aEditar.classList.add('text-info', 'text-decoration-none');
                aEditar.setAttribute('data-bs-toggle', 'modal');
                aEditar.setAttribute('data-bs-target', '#modalEditar');
                aEditar.setAttribute('data-bs-whatever', `${continente.cod_con}`);
                aEditar.role = 'button';
                let iEditar = document.createElement('i');
                iEditar.classList.add('fa-solid', 'fa-pen-to-square');
                iEditar.style = "color: #7599d7;";
                aEditar.appendChild(iEditar);
                tdAcciones.appendChild(aEditar);

                let span = document.createElement('span');
                span.textContent = ' | ';
                tdAcciones.appendChild(span);

                let aEliminar = document.createElement('a');
                aEliminar.classList.add('text-danger', 'text-decoration-none');
                aEliminar.href = '#';
                let iEliminar = document.createElement('i');
                iEliminar.classList.add('fa-solid', 'fa-trash');
                iEliminar.style = "color: #ab0707;";
                aEliminar.appendChild(iEliminar);
                tdAcciones.appendChild(aEliminar);

                tr.appendChild(tdAcciones);
                body.appendChild(tr);
            });
        });
}
