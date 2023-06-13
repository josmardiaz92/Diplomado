let a=[];
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
    document.write(`El elemnto ${ele} se almacena en laposicion: ${ind} <br>`);
});