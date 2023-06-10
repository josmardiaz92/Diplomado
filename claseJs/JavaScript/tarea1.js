let añoActual = 0;
let añoNacimiento = 0;
let edad = 0;

do
{
    añoActual = parseInt(prompt("Ingrese el año actual: ")); //validación 
}while(añoActual < 2023);

do
{
    añoNacimiento = parseInt(prompt("Ingrese su año de nacimiento: ")); //validación 
}while(añoNacimiento > añoActual);


edad = añoActual-añoNacimiento;

alert("Su edad es " + edad + " años.");

if(edad < 18)
{
    alert("Usted es Menor de Edad.");
}
else
{
    alert("Usted es Mayor de Edad.");
}

