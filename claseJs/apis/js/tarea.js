let url='https://randomfox.ca/floof/';
let contenidoHTML=``;


fetch(url)
    .then(respuesta=>respuesta.json())
    .then(zorra=>{
        zorra1.src=zorra.image
    });
fetch(url)
    .then(respuesta=>respuesta.json())
    .then(zorra=>{
        zorra2.src=zorra.image
    });
fetch(url)
    .then(respuesta=>respuesta.json())
    .then(zorra=>{
        zorra3.src=zorra.image
    });
fetch(url)
    .then(respuesta=>respuesta.json())
    .then(zorra=>{
        zorra4.src=zorra.image
    });
fetch(url)
    .then(respuesta=>respuesta.json())
    .then(zorra=>{
        zorra5.src=zorra.image
    });



const recargar=document.getElementById('titulo');
recargar.addEventListener('click',()=>{
    location.reload();
});