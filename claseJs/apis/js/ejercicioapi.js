const urlAPI="https://www.amiiboapi.com/api/amiibo";
let contenHTML='';
fetch(urlAPI)
    .then(res=>res.json())
    .then(json=>{
        json.amiibo.forEach((personaje,index) => {
            console.log(personaje)
            contenHTML+=`
            <div class="card col-3 m-3 p-3" id="card${index}" style="background-color: rgba(255, 255, 255, 0.2); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(25px);border-radius: 10px;">
                <img src="${personaje.image}" class="card-img-top img-fluid h-100" alt="${personaje.character}">
                <div class="card-body">
                <h5 class="card-title text-dark text-center">${personaje.character}</h5>
                <p class="card-text text-dark">Realizado en japon en ${personaje.release.jp}.</p>
                <p class="card-text text-light text-center">${personaje.gameSeries}</p>
                </div>
            </div>`
        });
        marvelCard.innerHTML=contenHTML;

    })
.catch(error =>{console.error(error)})