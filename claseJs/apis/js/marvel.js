const marvel={
    consulta:()=>{
        const urlAPI="https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=f4a0f8c6d2dfc289a81abbcebc496e21&hash=75846487562165690a37fd00f19e3ca6";
        let contenHTML='';
        //?contenedores html

        fetch(urlAPI)
            .then(res=>res.json())
            .then(json=>{
                console.log(json)
                json.data.results.forEach(hero => {
                    contenHTML+=` 
                    <div class="col-4 text-center marvelCol mt-3">
                        <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail img-fluid h-75 imgHero">
                        <hr>
                        <h3 class="tittle mb-2 fs-5">${hero.name}</h3>
                    </div>`
                });
                marvelRow.innerHTML=contenHTML;

            })
        .catch(error =>{console.error(error)})
    }
};
marvel.consulta()
