const identificador=document.getElementById('identificador').value;
const modalEditar=document.getElementById('modalEditar');
modalEditar.addEventListener('show.bs.modal', evento => {
    const btn = evento.relatedTarget;
    const codigo = btn.getAttribute('data-bs-whatever');
    continente_listar_uno(codigo);

    setTimeout(() => {
        continente_editar(codigo);
    }, 300);
    
})

function continente_editar(codigo) {
    const form = modalEditar.querySelector('form');
    let data = {};

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const nom_con = modalEditar.querySelector('#nom_con').value;
        const des_con = modalEditar.querySelector('#des_con').value;
        const est_con = modalEditar.querySelector('#est_con').value;

        data = {
            identificador: identificador,
            cod_con: codigo,
            nom_con: nom_con,
            des_con: des_con,
            est_con: est_con
        };
        if (data != {}) {
            fetch("http://localhost:3000/update", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(result => {
                    console.log(result);
                    window.location.href = (`../vistas/${identificador}_listar.html`);
                })
                .catch(error => {
                    console.error("Error al enviar los datos:", error);
                });
        } else {
            console.log('Invalido');
        }
    });
}

function continente_listar_uno(codigo) {
    fetch('http://localhost:3000/continente')
        .then((response) => response.json())
        .then((continentes) => {
            const cuerpo = modalEditar.querySelector('#cuerpo');
            cuerpo.innerHTML='';
            continentes.forEach(continente => {
                if (continente.cod_con == codigo) {
                    const form = document.createElement('form');
                    form.action = '/edit';
                    form.method = 'post';
                    const divNombre = document.createElement('div');
                    divNombre.classList.add('mb-3');
                    const labelNombre = document.createElement('label');
                    labelNombre.setAttribute('for', 'nom_con');
                    labelNombre.classList.add('form-label');
                    labelNombre.textContent = 'Nombre: ';
                    divNombre.appendChild(labelNombre);
                    const inputNombre = document.createElement('input');
                    inputNombre.type = 'text';
                    inputNombre.classList.add('form-control');
                    inputNombre.id = 'nom_con';
                    inputNombre.name = 'nom_con';
                    inputNombre.placeholder = 'Nombre del Continente';
                    inputNombre.required = true;
                    inputNombre.value=continente.nom_con;
                    divNombre.appendChild(inputNombre);
                    form.appendChild(divNombre);
                    const divDescripcion = document.createElement('div');
                    divDescripcion.classList.add('mb-3');
                    const labelDescripcion = document.createElement('label');
                    labelDescripcion.setAttribute('for', 'des_con');
                    labelDescripcion.classList.add('form-label');
                    labelDescripcion.textContent = 'Descripcion: ';
                    divDescripcion.appendChild(labelDescripcion);
                    const inputDescripcion = document.createElement('input');
                    inputDescripcion.type = 'text';
                    inputDescripcion.classList.add('form-control');
                    inputDescripcion.id = 'des_con';
                    inputDescripcion.name = 'des_con';
                    inputDescripcion.placeholder = 'Descripcion del Continente';
                    inputDescripcion.required = true;
                    inputDescripcion.value=continente.des_con;
                    divDescripcion.appendChild(inputDescripcion);
                    form.appendChild(divDescripcion);
                    const divEstatus = document.createElement('div');
                    divEstatus.classList.add('mb-3');
                    const labelEstatus = document.createElement('label');
                    labelEstatus.setAttribute('for', 'des_con');
                    labelEstatus.classList.add('form-label');
                    labelEstatus.textContent = 'Estatus: ';
                    divEstatus.appendChild(labelEstatus);
                    const selectEstatus = document.createElement('select');
                    selectEstatus.id = 'est_con';
                    selectEstatus.name = 'est_con';
                    selectEstatus.classList.add('form-select');
                    selectEstatus.required = true;
                    const opcion1 = document.createElement('option');
                    opcion1.value = '';
                    opcion1.textContent = 'Seleccione...';
                    selectEstatus.appendChild(opcion1);
                    const opcion2 = document.createElement('option');
                    opcion2.value = 'A';
                    opcion2.textContent = 'Activo';
                    opcion2.value===continente.est_con ? opcion2.selected=true : '';
                    selectEstatus.appendChild(opcion2);
                    const opcion3 = document.createElement('option');
                    opcion3.value = 'I';
                    opcion3.textContent = 'Inactivo';
                    opcion3.value===continente.est_con ? opcion3.selected=true : '';
                    selectEstatus.appendChild(opcion3);
                    divEstatus.appendChild(selectEstatus);
                    form.appendChild(divEstatus);
                    const hr = document.createElement('hr');
                    form.appendChild(hr);
                    const divBtn = document.createElement('div');
                    divBtn.classList.add('d-flex', 'justify-content-center');
                    const btnEditar = document.createElement('button');
                    btnEditar.type = 'submit';
                    btnEditar.id = 'btnEditar';
                    btnEditar.classList.add('btn', 'btn-primary');
                    btnEditar.textContent = 'Editar';
                    divBtn.appendChild(btnEditar);
                    form.appendChild(divBtn);
                    cuerpo.appendChild(form);
                }
            });
        });
}
