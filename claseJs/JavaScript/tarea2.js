let numero1=0;
let numero2=0;
let producto=0;
let i;

for(i=0;i<4;i++)
{
    do
    {
        numero1=parseInt(prompt("Ingrese el primer numero: "));
    }while(numero1<0);
    
    do
    {
        numero2=parseInt(prompt("Ingrese el segundo numero: "));
    }while(numero2<0);

    producto=numero1*numero2;

    alert("El resultado es: " + producto);
    
}