//como trabajar el prompt

/* let cedula = prompt('Ingrese Cédula: ');

alert('Su cédula es: ' + cedula); */

//fin

//calculo de promedio mediante prompts

/* let nota1 = parseInt(prompt('Por favor ingrese la nota 1: ')); //con parseInt(), se convierte el string en un numero 

let nota2 = parseInt(prompt('Por favor ingrese la nota 2: '));

let nota3 = parseInt(prompt('Por favor ingrese la nota 3: '));

let nota4 = parseInt(prompt('Por favor ingrese la nota 4: '));

let n5 = 0;

let promedio = (nota1+nota2+nota3+nota4)/4;

alert('El promedio es: ' + promedio.toFixed(2)); //con .toFixed() delimito el numero de decimales delresultado */


//fin

//pruebas de metodos

/* let n1 = prompt('Por favor ingrese la nota 1: ');
let n2 = prompt('Por favor ingrese la nota 2: ');

console.log(typeof(n1));
console.log(isNaN(n2));
console.log(Number.isNaN(n1)); */

//fin

//if simple

/* if(promedio>=10)
{
    alert("Aprovaste");
}
else
{
    alert("Reprobaste");
}; */

//fin

//ciclo for

/* for (let i = 0; i < 2; i++)
{
    console.log("hola");
} */

//fin

//ciclo while

//por hacer

//fin

//ciclo do while

/* do
{
    n5 = parseInt(prompt("Ingrese la Nota 5: "));
} while(n5 < 1 || n5 > 20); */

//fin

let estudiantes = parseInt(prompt("Por favor, Indique el numero de estudiantes: "));
let i;
let nota;
let sumatoriaNota;
let promedio;


for(i = 0; i<estudiantes; i++) {
    
    nota = parseInt(prompt("introduzca la nota: "));
    sumatoriaNota += nota;
}

promedio = nota/estudiantes;

alert("el promedio es: " + promedio);

