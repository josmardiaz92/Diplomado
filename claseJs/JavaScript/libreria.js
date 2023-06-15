/* let a=[`atolito`,`cocosete`,`enrrique`,`crazy`];
//console.log(a);
document.write(a.length);

var n=[35,22,100,7,88,44];
//console.log(n);

const f=["Hola","Hi","Epale","Que onda"];
//console.log(f);

let g=[true,"Saludo",4,[22,63,24,10],"a"];
//console.log(g);

let z=Array.of(33,56,43,22);
//console.log(`Arreglo original`);
//console.log(z);



console.log(`Arreglo creado como objeto con of ${z}`);
console.log("Arreglo creado como objeto con of" + z);
console.log(`valor de la posicion "2" del arreglo: ${z[2]}`);
z.push(88);
console.log(`arreglo con un nuevo elemento alfinal ${z}`);
z.pop();
console.log(`arreglocon menos elementos en la ultima celda: ${z}`);

document.write(`<h2>Valores almacenados en el arreglo:</h2> <br>`);

z.forEach(function(ele,ind){
    document.write(`El elemnto ${ele} se almacena en la posicion: ${ind} <br>`);
});

let x=0;

for(x=0;x<z.length;x++){
    document.write(`El elemnto ${z[x]}, acompañado del elemento ${a[x]} se almacenan en la posicion: ${x} <br> `);
}

//se puede pasar varios arrays por un mismo ciclo, siempre y cuando tengan la misma cantidad de elementos

let nota=[15,18,10,8,17,20];
let i=0,nt=nota.length;

for(i=0;i<nt;i++){
    document.write(`El elemnto ${i} tiene un valor de ${nota[i]} <br>`);
} */


let nota=[15,18,10,8,17,20];
let i=0,n=nota.length;

document.write(`----------ORIGINAL----------<br>`);
for(i=0;i<n;i++)
{
    document.write(`El elemento ${i} tiene un valor de ${nota[i]} <br>`);
}

document.write(`----------ORDENADO DE MAYOR A MENOR----------<br>`);
nota.sort(function(a,b){return b-a});
for(i=0;i<n;i++)
{
    document.write(`El elemento ${i} tiene un valor de ${nota[i]} <br>`);
}

document.write(`----------ORDENADO DE MENOR A MAYOR----------<br>`);
nota.sort(function(a,b){return a-b});
for(i=0;i<n;i++)
{
    document.write(`El elemento ${i} tiene un valor de ${nota[i]} <br>`);
}