const urlAPI="https://gateway.marvel.com:443/v1/public/characters?ts=1689204428433&apikey=f4a0f8c6d2dfc289a81abbcebc496e21&hash=fdbe7046ba2d431a2cbbf5b11be62df9";
let contenHTML='';
let contenTextCard='';
fetch(urlAPI)
    .then(res=>res.json())
    .then(json=>{
        console.log(json)
        json.data.results.forEach((hero, index) => {
            contenHTML+=`
            <div class="card col-3 m-3">
                <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" class="card-img-top" alt="${hero.name}">
                <div class="card-body">
                <h5 class="card-title">${hero.name}</h5>
                <p class="card-text text-dark" id="aparicion${index}">Aparece en las series:<br></p>
                <p class="card-text"><a class="text-danger text-decoration-none" href="${hero.urls[0].url}" target="_blank">Ver mas</a></p>
                </div>
            </div>`
        });
        marvelCard.innerHTML=contenHTML;
        json.data.results.forEach((hero, index)=>{
            contenTextCard='';
            hero.series.items.forEach((series, index)=>{
                contenTextCard+=` ${series.name}<br>`
            })
            let idCard=document.getElementById(`aparicion${index}`);
            idCard.innerHTML=contenTextCard;
        })

    })
.catch(error =>{console.error(error)})
