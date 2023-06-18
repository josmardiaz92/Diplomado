let nombre, apellido;
let nota,notaMate,notaFisi,notaQuim,notaProg;
let estudiantes=0,i,promedio=0,promedioSeccion=0,acumuladorNotas=0;

let seccion=[];
let notas=[];

do{
    estudiantes=parseInt(prompt('Ingrese la cantidad de estudiantes: '));
}while(isNaN(estudiantes) || estudiantes<1);

for (i = 0; i < estudiantes; i++) 
{
    seccion.push(pedirDatos());

}

promedioSeccion=calcularPromedioSeccion().toFixed(2);

seccion.forEach((element,index) => {
    document.write('El estudiante N° '+(index+1)+' de nombre y apellido: '+element[0]+' '+element[1]+' tiene un promedio de '+element[6]+' pts. <br>');})

document.write('<h1>El promedio de la seccion es de '+promedioSeccion+' pts.');


//FUNCIONES

function pedirNotas(materia) {
    do {
        nota=parseInt(prompt('Ingrese la nota de '+materia+': '));
    } while (isNaN(nota) || (nota<1 || nota>20));

    return nota;
}

function pedirDatos() {
    do{
        nombre=prompt('Ingrese el nombre del estudiante N° '+(i+1)+': ');
    }while(nombre.length<1);
    do{
        apellido=prompt('Ingrese el apellido del estudiante N° '+(i+1)+': ');
    }while(apellido.length<1);
    notaMate=pedirNotas('Matematica');
    notaFisi=pedirNotas('Física');
    notaQuim=pedirNotas('Quimica');
    notaProg=pedirNotas('Programación');
    
    let promedioEstudiante=calcularPromedioEstudiante(notaMate,notaFisi,notaQuim,notaProg);
    return [nombre,apellido,notaMate,notaFisi,notaQuim,notaProg,promedioEstudiante];
}

function calcularPromedioEstudiante(n1,n2,n3,n4) {
    promedio=(n1+n2+n3+n4)/4;
    return promedio;
}


function calcularPromedioSeccion() {

    seccion.forEach((element,index) => {
        notas.push(element[6]);
    })

    notas.forEach((element,index)=> {
        acumuladorNotas+=element;
    })

    return acumuladorNotas/estudiantes;
}





