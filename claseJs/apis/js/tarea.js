const url = 'https://randomfox.ca/floof/';

const elementosZorra = [zorra1, zorra2, zorra3, zorra4, zorra5]; // Asegúrate de que los elementos existan y estén correctamente referenciados

elementosZorra.forEach((elemento, index) => {
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(zorra => {
        elemento.src = zorra.image;
    });
});

const recargar = document.getElementById('titulo');
recargar.addEventListener('click', () => {
    location.reload();
});

const imagenes=document.querySelectorAll('.zzz');
imagenes.forEach(Element=>{
    Element.addEventListener('click',()=>{
        fetch(url)
        .then(respuesta => respuesta.json())
        .then(zorra => {
        Element.src = zorra.image;
    });
    })
})