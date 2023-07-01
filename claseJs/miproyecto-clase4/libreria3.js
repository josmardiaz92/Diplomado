const elementos=document.querySelectorAll('.form-control');

const expresionesRegulares = {
    ide_cli: /^[v,j,e]\d{6,9}\b/i,
    raz_cli: /^[A-Za-zÀ-ÖØ-öø-ÿ\s']+$/i,
    dir_cli: /^[a-zA-Z0-9\s\.,'-]+$/,
    cor_cli: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
    tel_cli: /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/,
    est_cli: /A|I/
};

const validarCampo=(campo,valor,expresionesRegular)=>{
    const valido=expresionesRegular.test(valor);
    campo.classList.toggle("is-valid", valido);
    campo.classList.toggle("is-invalid", !valido);
    campo.classList.toggle("invalida", !valido);
    campo.nextElementSibling.classList.toggle("invalid-feedback", !valido);
    campo.nextElementSibling.innerText = valido ? " " : `Introduzca un valor válido`;
};

elementos.forEach(elemento=>{
    elemento.addEventListener('blur',(evento)=>{
        const campo=evento.target;
        const valor=campo.value;
        const id=campo.id;
        const Regexp=expresionesRegulares[id];
        console.log(Regexp);
        if(valor.length===0){
            campo.classList.remove("casilla");
            campo.classList.add("is-invalid");
            campo.classList.add("invalida");
            campo.nextElementSibling.classList.add("invalid-feedback");
            campo.nextElementSibling.innerText = "No puede dejarlo vacío";
        }else{
            validarCampo(campo,valor,Regexp);
        }
        })
    });

