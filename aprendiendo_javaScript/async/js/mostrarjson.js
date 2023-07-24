async function consulta() {
    const respuesta = await fetch("http://127.0.0.1:5500/claseJs/async/json/mostrarjson.json");
    const arregloJson = await respuesta.json();
    console.log(arregloJson)
    nombre.value=arregloJson.nombre;
    apellido.value=arregloJson.apellido;
    cedula.value=arregloJson.cedula;
    direccion.value=`${arregloJson.direccion.pais}, Estado ${arregloJson.direccion.estado}, Municipio ${arregloJson.direccion.municipio}.`
    arregloJson.hobbies.forEach(element => {
        hobbies.value+=`${element} `
    });
    arregloJson.notas.forEach((element,index)=>{
        const nuevaOpcion = document.createElement('option');
        nuevaOpcion.value = `${index+1}`;
        nuevaOpcion.textContent = element.asignatura;
        asignatura.appendChild(nuevaOpcion);
    })

    const respuestaImagen=await fetch("http://127.0.0.1:5500/claseJs/async/imagen/descarga.jpeg")
    .then(respuesta=>{
        return respuesta.blob();
    })
    // crea el objeto de lo que viene de la URL
    .then(respuesta2=>{
    imagen.src = URL.createObjectURL(respuesta2)
    })
    //exception si hay error
    .catch(error =>{console.error(error)})
}

consulta();
