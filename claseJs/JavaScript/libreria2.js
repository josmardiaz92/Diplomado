const elemento=document.querySelector('#parrafo'); //elemnto que cambiara y sobre el cual se presionara click

//con ese metodo, se toma un elemento html con elid mencionado y se obtiene su contenido, eltipo y sus propiedades

elemento.addEventListener('click',()=>{ //addEventListener se usa para que cuando el veneto "Click" suceda, realiza lo dispuesto en el callback
    desaparecer(elemento);
    setTimeout(()=>{ //es una funcion nativa de js que establece un temporizador en milisegundos para ejecutar una funcion callback al finalizar
        elemento.textContent='Este es elnuevo texto insertado desde js con el uso defuncionesnativas,funciones anidadas y funciones realizadas por el desarrollador'; //toma elcontenido del elemento y en este caso lo cambiapor un nuevo valor
        aparecer(elemento);
    }, 850); //tiempo de espera antes de ejecutar el callback
});

function desaparecer(elem)
{
    elem.style.opacity=1;
    (function cambio() //paraanidar funciones dentro de otras, se debe encerrar la anidad en parentesis
    {
        if((elem.style.opacity-=0.1)<0) // como la funcion va a ser llamada recursivamente, por eso plamnteamos esta condicional
        {
            elem.style.display='none';
        }
        else
        {
            requestAnimationFrame(cambio); //con esto es que se hace la llamada recursiva. esta funcion informa al navegador que quieres realizar una animacion y solicita que el navegador programe el repintado de la ventana para el proximo ciclo de la animacion.
        }
    })(); //si no se lococan esos dos parentesis extras, no funciona la funcion, esto es porque es una funcion anidada.
}

function aparecer(elem)
{
    elem.style.opacity=0;
    elem.style.display='block';
    elem.style.color='#0000FF';
    elem.style.fontWeight='bold';
    elem.title='recargue la pagina';
    (function cambiar()
    {
        let val=parseFloat(elem.style.opacity);
        if(!((val+=0.005)>1))
        {
            elem.style.opacity=val;
            requestAnimationFrame(cambiar);
        }
    })();
}
