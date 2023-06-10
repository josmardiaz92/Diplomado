let nombreEstudiante;
let nota1=0;
let nota2=0;
let nota3=0;
let nota4=0;
let promedio=0;
let confirmacion = "s";

while(confirmacion=="s")
{
    do
    {
        nombreEstudiante=prompt("Ingrese el nombre del estudiante: ","Nombre y Apellido");
    }while(nombreEstudiante === "Nombre y Apellido");

    do
    {
        nota1 = parseInt(prompt("introduzca la nota de la primera materia del 1 al 20: ")); //validación de notas
    }while(nota1 < 1 || nota1 > 20);

    do
    {
        nota2 = parseInt(prompt("introduzca la nota de la segunda materia del 1 al 20: ")); //validación de notas
    }while(nota2 < 1 || nota2 > 20);

    do
    {
        nota3 = parseInt(prompt("introduzca la nota de la tercera materia del 1 al 20: ")); //validación de notas
    }while(nota3 < 1 || nota3 > 20);

    do
    {
        nota4 = parseInt(prompt("introduzca la nota de la cuarta materia del 1 al 20: ")); //validación de notas
    }while(nota4 < 1 || nota4 > 20);

    promedio = (nota1+nota2+nota3+nota4)/4;

    alert("El estudiante " + nombreEstudiante + " tuvo un promedio de " + promedio + " Pts entre las materias cursadas.");

    do
    {
        confirmacion=prompt("¿Desea registrar otro estudiante?: ","Indique (s) para si o (n) para no");
    }while(confirmacion != "s" && confirmacion != "n");
    }

    