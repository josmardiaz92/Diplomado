let ent;
let valor;

ent=entrada();
valor=proceso(ent);
salida(valor);



function entrada(){
    let a=10,b=15;
    return [a,b];
}
function proceso(z){
    let rs=z[0]+z[1];
    let rr=z[0]-z[1];
    let rm=z[0]*z[1];
    let rd=(z[0]/z[1]).toFixed(2);

    return [rs,rr,rm,rd];
}
function salida(z){
    console.log(`La suma es: ${z[0]}\n La resta es: ${z[1]}\n La multiplicación es: ${z[2]}\n La división es: ${z[3]}`)
}