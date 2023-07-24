//1er ejercicio
let nombre, apellido;
let añoNacimiento=0, añoActual=0;
let mayor;

let [nom,ape,añn,aña]=leer();
let persona=calcular(añn,aña);
mostrar(nom,ape,añn,persona);

function leer()
{
    do{
        nombre=prompt('Ingrese su nombre: ');
    }while(nombre.length<1);
    do{
        apellido=prompt('Ingrese su apellido: ');
    }while(apellido.length<1);
    do{
        añoNacimiento=parseInt(prompt('Ingrese su año de nacimiento: '))
    }while(isNaN(añoNacimiento) || (añoNacimiento>2023 || añoNacimiento<1923));
    do{
        añoActual=parseInt(prompt('Ingrese el año actual: '))
    }while(isNaN(añoActual) || añoActual!=2023);
    return [nombre,apellido,añoNacimiento,añoActual];
}

function calcular(añoNacimiento,añoActual)
{
    if(añoActual-añoNacimiento>=18)
    {
        mayor=true;
    }
    else
    {
        mayor=false;
    }
    return mayor;
}

function mostrar(nombre,apellido,añoNacimiento,mayor)
{
    document.write('Su nombre es: '+nombre+'<br>');
    document.write('Su apellido es: '+apellido+'<br>');
    document.write('Nació en el año '+añoNacimiento+'<br>');
    if(mayor)
    {
        document.write(' Y usted es mayor de edad');
    }
    else
    {
        document.write(' Y usted es menor de edad');
    }

}