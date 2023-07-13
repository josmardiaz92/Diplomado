const urlAPI="https://gateway.marvel.com:443/v1/public/characters?ts=1689204428433&apikey=f4a0f8c6d2dfc289a81abbcebc496e21&hash=fdbe7046ba2d431a2cbbf5b11be62df9";
let contenHTML='';
fetch(urlAPI)
    .then(res=>res.json())
    .then(json=>{
        console.log(json)
        json.data.results.forEach(hero => {
            contenHTML+=`
            <div class="card col-3 m-3">
                <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" class="card-img-top" alt="${hero.name}">
                <div class="card-body">
                <h5 class="card-title">${hero.name}</h5>
                <p class="card-text">Esta es una tarjeta más amplia con texto de apoyo a continuación como introducción natural a contenido adicional. Este contenido es un poco más largo.</p>
                <p class="card-text"><small class="text-muted">Última actualización hace 3 minutos</small></p>
                </div>
            </div>`
        });
        marvelCard.innerHTML=contenHTML;

    })
.catch(error =>{console.error(error)})
