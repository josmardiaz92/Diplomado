const validaCorreo=() => {
    let xcor_cli=document.getElementById('cor_cli').value
    alert(`tu correo es: ${xcor_cli}`);
    let regExp=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    let valida=regExp.test(xcor_cli);
    if(valida)
    {
        alert(`La dirección ${xcor_cli} es un correo Valido`);
    }
    else
    {
        alert(`La dirección ${xcor_cli} No es un correo Valido`);
    }
}

const validaTelefono=() => {
    let xtel_cli=document.getElementById('tel_cli').value
    alert(`tu telefono es: ${xtel_cli}`);
    let regExp=/^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/;
    let valida=regExp.test(xtel_cli);
    if(valida)
    {
        alert(`El teléfono ${xtel_cli} si es Valido`);
    }
    else
    {
        alert(`El teléfono ${xtel_cli} No es Valido`);
    }
}

//*Otra forma de llamar espor el name:

/* const elemento_cor = document.querySelector("[name=cor_cli]");


const validaCompoVacio=(evento)=>{
    const Campo=evento.target;
    const valorCampo=evento.target.value;
    if(valorCampo.length===0){
        Campo.classList.add("invalida");
        Campo.nextElementSibling.classList.add("error");
        Campo.nextElementSibling.innerText=`${Campo.name} no puede estar vacio`;
    }
    else
    {
        Campo.classList.remove("invalida");
        Campo.nextElementSibling.classList.remove("error");
        Campo.nextElementSibling.innerText=" "; 
    }
};

elemento_cor.addEventListener("blur", validaCompoVacio); */

//*Con una funcion anonima tradicionalmesirve para anidarle una funcion de flecha

const elementoCorreo = document.querySelector("[name=cor_cli]");
const elementoTelefono=document.querySelector("[name=tel_cli]");

elementoCorreo.addEventListener("blur", function(evento){
    const CampoCorreo=evento.target;
    const valorCampoCorreo=evento.target.value;
    if(valorCampoCorreo.length===0)
    {
        CampoCorreo.classList.add("is-invalid");
        CampoCorreo.nextElementSibling.classList.add("error");
        CampoCorreo.nextElementSibling.innerText="Valor agregado no es valido";
    }
    else
    {
        CampoCorreo.classList.remove("is-invalid");
        CampoCorreo.nextElementSibling.classList.remove("error");
        CampoCorreo.nextElementSibling.innerText=" ";
        validaCorreo();
    }
});

elementoTelefono.addEventListener("blur", function(evento){
    const CampoTelefono=evento.target;
    const valorCampoTelefono=evento.target.value;
    if(valorCampoTelefono.length===0)
    {
        CampoTelefono.classList.add("invalida");
        CampoTelefono.nextElementSibling.classList.add("error");
        CampoTelefono.nextElementSibling.innerText="Valor agregado no es valido";
    }
    else
    {
        CampoTelefono.classList.remove("invalida");
        CampoTelefono.nextElementSibling.classList.remove("error");
        CampoTelefono.nextElementSibling.innerText=" ";
        validaTelefono();
    }
});





    