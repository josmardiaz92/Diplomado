const marvel={
    consulta:()=>{
        const urlAPI="https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=f4a0f8c6d2dfc289a81abbcebc496e21&hash=75846487562165690a37fd00f19e3ca6";
        //?contenedores html

        fetch(urlAPI)
            .then(res=>res.json())
            .then((json)=>{
                console.log(json, 'res.json')
            })
    }
};
marvel.consulta()
