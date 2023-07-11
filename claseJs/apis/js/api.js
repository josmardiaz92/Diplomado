let ruta='https://dog.ceo/api/breeds/image/random';

fetch(ruta)
.then(respuesta=>respuesta.json())
.then(datos=>{
    perro.src=datos.message;
})
.catch(error=>{console.error(`Atención ${error}`)})

const btnRecargar = document.getElementById('btnRecargar');
btnRecargar.addEventListener('click', function() {
    location.reload();
});