//TODO Toma de los elementos mediante la clase
const elementos=document.querySelectorAll('.validar');

//TODO Aca se agregan las expresiones regulares, se hace en una lista y se coloca como propiedad el id de los elementos
const expresionesRegulares = {
    ide_cli: /^[v,j,e]\d{6,9}\b/i,
    raz_cli: /^[A-Za-zÀ-ÖØ-öø-ÿ\s']+$/i,
    dir_cli: /^[a-zA-Z0-9\s\.,'-]+$/,
    cor_cli: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
    tel_cli: /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/,
    est_cli: /A|I/
};

//TODO en esta funcion se valida el contenido de los campos con respecto a las expresionesRegulares
const validarCampo=(campo,valor,expresionesRegular)=>{
    const valido=expresionesRegular.test(valor);
    campo.classList.toggle("is-valid", valido); //*Si valido es true, se agrega "is-valid" a la clase del elemento
    campo.classList.toggle("is-invalid", !valido); //*Si valido es false, se agrega "is-invalid" a la clase del elemento
    campo.classList.toggle("invalida", !valido); //*Si valido es false, se agrega "invalida" a la clase del elemento
    campo.nextElementSibling.classList.toggle("invalid-feedback", !valido); //*Si valido es false, se agrega "invalid-feedback" a la clase del siguiente elemento
    campo.nextElementSibling.innerText = valido ? " " : `Introduzca un valor válido`; //*Dependiendo del valor de valido, de agregará el primer valor para true o el 2do para false
};

//TODO Aca es donde se ejecuta todo
elementos.forEach(elemento=>{
    elemento.addEventListener('blur',(evento)=>{
        const campo=evento.target;
        const valor=campo.value;
        const id=campo.id;
        const Regexp=expresionesRegulares[id];
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

