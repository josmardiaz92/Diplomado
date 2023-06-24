let pantalla='';
const tecla0=document.getElementById('cero');
const tecla1=document.getElementById('uno');
const tecla2=document.getElementById('dos');
const tecla3=document.getElementById('tres');
const tecla4=document.getElementById('cuatro');
const tecla5=document.getElementById('cinco');
const tecla6=document.getElementById('seis');
const tecla7=document.getElementById('siete');
const tecla8=document.getElementById('ocho');
const tecla9=document.getElementById('nueve');
const teclaBT=document.getElementById('borrarTodo');
const teclaBU=document.getElementById('borrarUno');
const teclaDivision=document.getElementById('division');
const teclaMultiplicacion=document.getElementById('multiplicacion');
const teclaResta=document.getElementById('resta');
const teclaSuma=document.getElementById('suma');
const teclaPunto=document.getElementById('punto');
const teclaE=document.getElementById('exponente');
const teclaDarResultado=document.getElementById('darResultado');

function obtenerResultado(operacion)
{
    var numeros = operacion.match(/\d+(\.\d+)?/g);

    // Encontrar todos los operadores en la cadena
    var operadores = operacion.match(/[-+*/e]/g);

    if (numeros !== null && operadores !== null && numeros.length >= 2 && operadores.length >= 1) {
        var resultado = parseFloat(numeros[0]);

        for (var i = 0; i < operadores.length; i++) {
            var numero = parseFloat(numeros[i + 1]);
            var operador = operadores[i];

            switch (operador) {
            case '+':
                resultado += numero;
                break;
            case '-':
                resultado -= numero;
                break;
            case '*':
                resultado *= numero;
                break;
            case '/':
                resultado /= numero;
                break;
            case 'e':
                resultado = resultado*(10**numero);
                break;
            default:
                break;
            }
        }
    }
    return resultado;
}


function agregarElemento(elemento)
{
    pantalla=pantalla+elemento;
    document.getElementById('resultado').value=pantalla;
}
function borrarUno()
{
    pantalla=pantalla.slice(0,-1);
    document.getElementById('resultado').value=pantalla;
}
function borrarTodo()
{
    pantalla='';
    document.getElementById('resultado').value=pantalla;
}
function mostrarResultado(resultado)
{
    document.getElementById('resultado').value=obtenerResultado(pantalla);
}

tecla0.addEventListener('click', () => {
    agregarElemento(0);
});
tecla1.addEventListener('click', () => {
    agregarElemento(1);
});
tecla2.addEventListener('click', () => {
    agregarElemento(2);
});
tecla3.addEventListener('click', () => {
    agregarElemento(3);
});
tecla4.addEventListener('click', () => {
    agregarElemento(4);
});
tecla5.addEventListener('click', () => {
    agregarElemento(5);
});
tecla6.addEventListener('click', () => {
    agregarElemento(6);
});
tecla7.addEventListener('click', () => {
    agregarElemento(7);
});
tecla8.addEventListener('click', () => {
    agregarElemento(8);
});
tecla9.addEventListener('click', () => {
    agregarElemento(9);
});
teclaBU.addEventListener('click', () => {
    borrarUno();
});
teclaBT.addEventListener('click', () => {
    borrarTodo();
});
teclaResta.addEventListener('click', () => {
    agregarElemento('-');
});
teclaSuma.addEventListener('click', () => {
    agregarElemento('+');
});
teclaDivision.addEventListener('click', () => {
    agregarElemento('/');
});
teclaMultiplicacion.addEventListener('click', () => {
    agregarElemento('*');
});
teclaPunto.addEventListener('click', () => {
    agregarElemento('.');
});
teclaE.addEventListener('click', () => {
    agregarElemento('e');
});
teclaDarResultado.addEventListener('click', () => {
    mostrarResultado(pantalla);
});


