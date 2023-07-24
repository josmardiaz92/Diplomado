let n = 0;
let rif, apellido,nombre, genero;
let edad = 0;
let cantidadProductos = 0;
let precioProductos= 0;
let clientesF = 0;
let clientes49 = 0;
let clientes50 = 0;
let montoCliente = 0;
let MontoEmpresa= 0;
let i;
let descuento = 0;
let montoBruto= 0;

do {
    n = parseInt(prompt(`Ingrese la cantidad de clientes a facturar: `));
}while(isNaN(n) || n < 1);

for(i=1;i<=n;i++)
{
    do{
        rif=prompt(`Ingrese el R.I.F. del cliente N° ${i}:`);
    }while(rif.length<1);

    do{
        apellido=prompt(`Ingrese el apellido del cliente N° ${i}: `)
    }while(apellido.length<1);

    do{
        nombre=prompt(`Ingrese el nombre del cliente N° ${i}: `)
    }while(nombre.length<1);

    do{
        edad=parseInt(prompt(`Ingrese la edad del cliente N° ${i}: `));
    }while(isNaN(edad) || edad < 1);

    do{
        genero=prompt(`Ingrese el genero del cliente N° ${i}, use "M" para masculino o "F" para femenino `)
    }while(genero.length!=1 || (genero!=`m` && genero!=`M` && genero!=`f` && genero!=`F`));

    do{
        cantidadProductos=parseInt(prompt(`Ingrese la cantidad de productos del cliente N° ${i}:  `))
    }while(isNaN(cantidadProductos) || cantidadProductos<1);

    do{
        precioProductos=parseInt(prompt(`Ingrese elprecio unitario de los productos para el cliente N° ${i}: `));
    }while(isNaN(precioProductos) || precioProductos<1);

    if(genero==`f` || genero==`F`)
    {
        clientesF++;
    };
    
    if(cantidadProductos>20)
    {
        montoBruto = cantidadProductos*precioProductos;
        descuento = montoBruto*0.25;
        montoCliente = montoBruto-descuento;
    }
    else
    {
        montoBruto = cantidadProductos*precioProductos;
        descuento = montoBruto*0.15;
        montoCliente = montoBruto-descuento;
    }

    if(edad>49)
    {
        clientes49++;
    }
    else
    {
        clientes50++;
    };

    MontoEmpresa+=montoCliente;

    alert(`El monto total a cancelar del cliente ${nombre} ${apellido}, R.I.F.: ${rif} es ${montoCliente} $`);
    
}

alert(`El N° declientes femeninos fue: ${clientesF}`);
alert(`El N° declientes mayores a 49 años fue: ${clientes49}`);
alert(`El N° declientes menores a 50 años fue: ${clientes50}`);
alert(`Elmonto generalque ingresó a la empresa fue de: ${MontoEmpresa}`);