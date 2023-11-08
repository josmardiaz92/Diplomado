setTimeout(() => {
    const btnEliminar=document.querySelectorAll('.btnEliminar');
    btnEliminar.forEach(boton=>{
        boton.addEventListener('click',evento=>{
            const confirmacion=eliminar();
            if(confirmacion){
                const btnSeleccionado=evento.target;
                const codigo = btnSeleccionado.getAttribute('data-bs-whatever');
                continente_eliminar(codigo)
            }
            
        })
    })
}, 1000);



function eliminar(){
    const confirmacion=confirm('¿Estás seguro de que deseas eliminar este continente?');
    return confirmacion
}

function continente_eliminar(codigo) {
    let data = {};
    data = {
        identificador: identificador,
        cod_con: codigo
    };
    if (data != {}) {
        fetch("http://localhost:3000/delete", {
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
}