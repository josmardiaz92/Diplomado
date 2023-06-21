//*asi llamamos la funcion desde el html */

function tocotitulo()
{
    
    alert('toco titulo ');
}

//* aca llamamos lafuncion desde js, sin tocar el html, todo atravez del id

const eltitulo=document.getElementById('imagencabezera');
eltitulo.onclick=tocotitulo2;

function tocotitulo2()
{
    alert(`Toco titulo2`);
}

//*este es el metodo mas utilizado
const laidentificacion=document.getElementById('identificacion');
laidentificacion.addEventListener('click',identificacion);


function identificacion()
{
    alert(`Toco laidentificacion`);
}


//* con esto se puede hacer un texting dela extructura del HTML

document.addEventListener('DOMContentLoaded',()=>{
    console.log('todo listo');
})

//** asi se puede interrumpir un envio summit que es una accion del HTML */

const formu=document.querySelector('#miformulario');
const comunicaFormulario=(evento)=>{
    evento.preventDefault(); //**este es la pausa */
    console.log(evento.target.ide_cli.value); //**aca veo los valores,de cada elemento */
    console.log(evento.target.raz_cli.value);
};
formu.addEventListener('submit',comunicaFormulario);