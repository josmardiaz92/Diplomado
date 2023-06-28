const validaIdentificacion=() => {
    let xide_cli=document.getElementById('ide_cli').value
    let validacion;
    let regExp=/^[v,j,e]\d{6,9}\b/i;
    let valida=regExp.test(xide_cli);
    if(valida)
    {
        validacion=true
    }
    else
    {
        validacion=false
    }
    return validacion;
}

const validaNombre=() => {
    let xraz_cli=document.getElementById('raz_cli').value
    let validacion;
    let regExp=/^[A-Za-zÀ-ÖØ-öø-ÿ\s']+$/i;
    let valida=regExp.test(xraz_cli);
    if(valida)
    {
        validacion=true
    }
    else
    {
        validacion=false
    }
    return validacion;
}

const validaDireccion=() => {
    let xdir_cli=document.getElementById('dir_cli').value
    let validacion;
    let regExp=/^[a-zA-Z0-9\s\.,'-]+$/;
    let valida=regExp.test(xdir_cli);
    if(valida)
    {
        validacion=true
    }
    else
    {
        validacion=false
    }
    return validacion;
}

const validaCorreo=() => {
    let xcor_cli=document.getElementById('cor_cli').value;
    let validacion;
    
    let regExp=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    let valida=regExp.test(xcor_cli);
    if(valida)
    {
        validacion=true
    }
    else
    {
        validacion=false
    }
    return validacion;
}

const validaTelefono=() => {
    let xtel_cli=document.getElementById('tel_cli').value
    let validacion;
    let regExp=/^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/;
    let valida=regExp.test(xtel_cli);
    if(valida)
    {
        validacion=true
    }
    else
    {
        validacion=false
    }
    return validacion;
}

const validaStatus=() => {
    let xest_cli=document.getElementById('est_cli').value
    let validacion;
    let regExp=/A|I/;
    let valida=regExp.test(xest_cli);
    if(valida)
    {
        validacion=true
    }
    else
    {
        validacion=false
    }
    return validacion;
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

const elementoIdentificacion = document.querySelector("[name=ide_cli]");
const elementoRazonSocial = document.querySelector("[name=raz_cli]");
const elementoDireccion = document.querySelector("[name=dir_cli]");
const elementoTelefono = document.querySelector("[name=tel_cli]");
const elementoCorreo = document.querySelector("[name=cor_cli]");
const elementoStatus = document.querySelector("[name=est_cli]");

elementoIdentificacion.addEventListener("blur", function(evento){
    const campoIdentificacion=evento.target;
    const valorcampoIdentificacion=evento.target.value;
    if(valorcampoIdentificacion.length===0)
    {
        campoIdentificacion.classList.remove("casilla");
        campoIdentificacion.classList.add("is-invalid");
        campoIdentificacion.classList.add("invalida");
        campoIdentificacion.nextElementSibling.classList.add("invalid-feedback");
        campoIdentificacion.nextElementSibling.innerText="No puede dejarlo vacio";
    }
    else
    {
        campoIdentificacion.classList.remove("is-invalid");
        campoIdentificacion.classList.remove("invalida");
        campoIdentificacion.classList.add("casilla");
        campoIdentificacion.nextElementSibling.classList.remove("invalid-feedback");
        campoIdentificacion.nextElementSibling.innerText=" ";
        let resultadoValidacion=validaIdentificacion();
            if(resultadoValidacion)
            {
                campoIdentificacion.classList.remove("casilla");
                campoIdentificacion.classList.add("is-valid");
            }
            else
            {
                campoIdentificacion.classList.remove("is-valid");
                campoIdentificacion.classList.add("is-invalid");
                campoIdentificacion.classList.add("invalida");
                campoIdentificacion.nextElementSibling.classList.add("invalid-feedback");
                campoIdentificacion.nextElementSibling.innerText="Introduzca una identificación válida";
            }
    }
});

elementoRazonSocial.addEventListener("blur", function(evento){
    const campoRazonSocial=evento.target;
    const valorcampoRazonSocial=evento.target.value;
    if(valorcampoRazonSocial.length===0)
    {
        campoRazonSocial.classList.remove("casilla");
        campoRazonSocial.classList.add("is-invalid");
        campoRazonSocial.classList.add("invalida");
        campoRazonSocial.nextElementSibling.classList.add("invalid-feedback");
        campoRazonSocial.nextElementSibling.innerText="No puede dejarlo vacio";
    }
    else
    {
        campoRazonSocial.classList.remove("is-invalid");
        campoRazonSocial.classList.remove("invalida");
        campoRazonSocial.classList.add("casilla");
        campoRazonSocial.nextElementSibling.classList.remove("invalid-feedback");
        campoRazonSocial.nextElementSibling.innerText=" ";
        let resultadoValidacion=validaNombre();
            if(resultadoValidacion)
            {
                campoRazonSocial.classList.remove("casilla");
                campoRazonSocial.classList.add("is-valid");
            }
            else
            {
                campoRazonSocial.classList.remove("is-valid");
                campoRazonSocial.classList.add("is-invalid");
                campoRazonSocial.classList.add("invalida");
                campoRazonSocial.nextElementSibling.classList.add("invalid-feedback");
                campoRazonSocial.nextElementSibling.innerText="Introduzca un nombre válido";
            }
    }
});

elementoDireccion.addEventListener("blur", function(evento){
    const campoDireccion=evento.target;
    const valorcampoDireccion=evento.target.value;
    if(valorcampoDireccion.length===0)
    {
        campoDireccion.classList.remove("casilla");
        campoDireccion.classList.add("is-invalid");
        campoDireccion.classList.add("invalida");
        campoDireccion.nextElementSibling.classList.add("invalid-feedback");
        campoDireccion.nextElementSibling.innerText="No puede dejarlo vacio";
    }
    else
    {
        campoDireccion.classList.remove("is-invalid");
        campoDireccion.classList.remove("invalida");
        campoDireccion.classList.add("casilla");
        campoDireccion.nextElementSibling.classList.remove("invalid-feedback");
        campoDireccion.nextElementSibling.innerText=" ";
        let resultadoValidacion=validaDireccion();
            if(resultadoValidacion)
            {
                campoDireccion.classList.remove("casilla");
                campoDireccion.classList.add("is-valid");
            }
            else
            {
                campoDireccion.classList.remove("is-valid");
                campoDireccion.classList.add("is-invalid");
                campoDireccion.classList.add("invalida");
                campoDireccion.nextElementSibling.classList.add("invalid-feedback");
                campoDireccion.nextElementSibling.innerText="Introduzca una dirección válida";
            }
    }
});

elementoTelefono.addEventListener("blur", function(evento){
    const CampoTelefono=evento.target;
    const valorCampoTelefono=evento.target.value;
    if(valorCampoTelefono.length===0)
    {
        CampoTelefono.classList.remove("casilla");
        CampoTelefono.classList.add("is-invalid");
        CampoTelefono.classList.add("invalida");
        CampoTelefono.nextElementSibling.classList.add("invalid-feedback");
        CampoTelefono.nextElementSibling.innerText="No puede dejarlo vacio";
    }
    else
    {
        CampoTelefono.classList.remove("is-invalid");
        CampoTelefono.classList.remove("invalida");
        CampoTelefono.classList.add("casilla");
        CampoTelefono.nextElementSibling.classList.remove("invalid-feedback");
        CampoTelefono.nextElementSibling.innerText=" ";
        let resultadoValidacion=validaTelefono();
            if(resultadoValidacion)
            {
                CampoTelefono.classList.remove("casilla");
                CampoTelefono.classList.add("is-valid");
            }
            else
            {
                CampoTelefono.classList.remove("is-valid");
                CampoTelefono.classList.add("is-invalid");
                CampoTelefono.classList.add("invalida");
                CampoTelefono.nextElementSibling.classList.add("invalid-feedback");
                CampoTelefono.nextElementSibling.innerText="Introduzca un Teléfono válido";
            }
    }
});

elementoCorreo.addEventListener("blur", function(evento){
    const CampoCorreo=evento.target;
    const valorCampoCorreo=evento.target.value;
    if(valorCampoCorreo.length===0)
    {
        CampoCorreo.classList.remove("casilla");
        CampoCorreo.classList.add("is-invalid");
        CampoCorreo.classList.add("invalida");
        CampoCorreo.nextElementSibling.classList.add("invalid-feedback");
        CampoCorreo.nextElementSibling.innerText="No puede dejarlo vacio";
    }
    else
    {
        CampoCorreo.classList.remove("is-invalid");
        CampoCorreo.classList.remove("invalida");
        CampoCorreo.classList.add("casilla");
        CampoCorreo.nextElementSibling.classList.remove("invalid-feedback");
        CampoCorreo.nextElementSibling.innerText=" ";
        let resultadoValidacion=validaCorreo();
            if(resultadoValidacion)
            {
                CampoCorreo.classList.remove("casilla");
                CampoCorreo.classList.add("is-valid");
            }
            else
            {
                CampoCorreo.classList.remove("is-valid");
                CampoCorreo.classList.add("is-invalid");
                CampoCorreo.classList.add("invalida");
                CampoCorreo.nextElementSibling.classList.add("invalid-feedback");
                CampoCorreo.nextElementSibling.innerText="Introduzca un correo válido";
            }
    }
});

elementoStatus.addEventListener("blur", function(evento){
    const campoStatus=evento.target;
    const valorcampoStatus=evento.target.value;
    if(valorcampoStatus.length===0)
    {
        campoStatus.classList.remove("casilla");
        campoStatus.classList.add("is-invalid");
        campoStatus.classList.add("invalida");
        campoStatus.nextElementSibling.classList.add("invalid-feedback");
        campoStatus.nextElementSibling.innerText="No puede dejarlo vacio";
    }
    else
    {
        campoStatus.classList.remove("is-invalid");
        campoStatus.classList.remove("invalida");
        campoStatus.classList.add("casilla");
        campoStatus.nextElementSibling.classList.remove("invalid-feedback");
        campoStatus.nextElementSibling.innerText=" ";
        let resultadoValidacion=validaStatus();
            if(resultadoValidacion)
            {
                campoStatus.classList.remove("casilla");
                campoStatus.classList.add("is-valid");
            }
    }
});
    