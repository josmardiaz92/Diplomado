let opcion=0,num1=0,num2=0,resultado=0;
let pregunta='si';

while (pregunta=='si') {
    do{
        opcion=prompt('Elija la operacion que desea realizar: \n1. Suma.\n2. Resta.\n3.Multiplicación.\n4. División.\n\nIndique el número de la operacion a realizar.');
    }while(isNaN(opcion) || (opcion<1 || opcion>4));

    do{
        num1=parseInt(prompt('Ingrese el primer número positivo: '))
    }while(isNaN(num1) || num1<=0);
    
    do{
        num2=parseInt(prompt('Ingrese el segundo número positivo: '))
    }while(isNaN(num2) || num2<=0);
    
    
    switch(opcion) {
        case '1':
            resultado=sumar(num1,num2);
        break;
        case '2':
            resultado=restar(num1,num2);
        break;
        case '3':
            resultado=multiplicar(num1,num2);
        break;
        default:
            resultado=dividir(num1,num2);
    }

    alert('El resultado es: '+resultado);

    do{
        pregunta=prompt('¿Desea hacer otro cálculo?\n\nsi o no')
    }while(pregunta!='si' && pregunta!='no');

}


//FUNCIONES

function pedirNumeros()
{
    do{
        num1=parseInt(prompt('Ingrese el primer número positivo: '))
    }while(isNaN(num1) || num1<=0)
    
    do{
        num2=parseInt(prompt('Ingrese el segundo número positivo: '))
    }while(isNaN(num2) || num2<=0)

    return [num1,num2];
}

function sumar(n1,n2)
{
    return n1+n2;
}

function restar(n1,n2)
{
    return n1-n2;
}

function multiplicar(n1,n2)
{
    return n1*n2;
}

function dividir(n1,n2)
{
    return n1/n2;
}