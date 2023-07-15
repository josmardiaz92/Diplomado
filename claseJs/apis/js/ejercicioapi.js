const urlAPI="https://www.amiiboapi.com/api/amiibo";
let contenHTML='';
let start=0;
const tamañoCarga = 6;
let loading = false; // Bandera para controlar la carga en curso

function loadMoreContent() {
     // Verificar si ya se está realizando una carga
    if (loading) {
        return;
    }

    loading = true; // Establecer la bandera de carga

    // Agregar clase de animación del cursor
    document.body.classList.add('loading-cursor');

    fetch(urlAPI)
    .then(res=>res.json())
    .then(json=>{
        // Calcular los índices de inicio y fin para la próxima carga
        const end = Math.min(start + tamañoCarga, json.amiibo.length);
        console.log(end)
        for(let i=start;i<end;i++){
            contenHTML=`
            <div class="card col-3 m-3 p-3" id="card${i}" style="background-color: rgba(255, 255, 255, 0.2); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(25px);border-radius: 10px;">
                <img src="${json.amiibo[i].image}" class="card-img-top img-fluid h-100" alt="${json.amiibo[i].character}">
                <div class="card-body">
                <h5 class="card-title text-dark text-center">${json.amiibo[i].character}</h5>
                <p class="card-text text-dark">Realizado en japon en ${json.amiibo[i].release.jp}.</p>
                <p class="card-text text-light text-center">${json.amiibo[i].gameSeries}</p>
                </div>
            </div>`
            marioCards.innerHTML+=contenHTML;
        }
        // Actualizar el índice de inicio para la próxima carga
        start = end;
        loading=false;
        document.body.classList.remove('loading-cursor');
    })
.catch(error =>{
    console.error(error);
    loading = false; // Restablecer la bandera de carga en caso de error

    // Eliminar clase de animación del cursor en caso de error
    document.body.classList.remove('loading-cursor');
});
}

// Función para detectar el evento de desplazamiento
function handleScroll() {
    const contentContainer = document.getElementById("marioCards");

    // Verificar si el usuario ha llegado al final de la página
    if (window.innerHeight + window.scrollY >= contentContainer.offsetHeight) {
        loadMoreContent();
    }
}

// Asociar la función handleScroll al evento de desplazamiento
window.addEventListener("scroll", handleScroll);

// Cargar inicialmente el primer fragmento de contenido
loadMoreContent();


