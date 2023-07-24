let texto='El instructor de JS es el Ing. Vidermid 2023/05/09, el curso tiene unaduración de seis clases de 4 horas cada una';
let patron=/Vidermid\s2023/i;
let resultado=texto.match(patron); //**metodo que permite hacer comparaciones */
resultado=`El texto encontrado es: ${resultado}`;
document.getElementById('imprime').innerHTML=resultado; //* innerHTML sirvepara agregar alhtml

//**otro metodo */

patron=/Vidermid/i;
resultado=texto.search(patron); //* va a buscar ellugar donde comienza
resultado=`el patron buscado se encuentra a partir del digito: ${resultado}`;
document.getElementById('imprime2').innerHTML=resultado;

//**reemplazar texto */

cambiar=()=>{
    let text=document.getElementById('mostrar').innerHTML;
    document.getElementById('mostrar').innerHTML=text.replace(/python/i,'NodeJs, luego si le toca el de Python'); //*el metodo replace reemplazaralo buscado con lo dispuesto
}

//*verificar si esta o no devolviendo valores bulianos

texto=document.getElementById('parrafo1').innerHTML;
const patron2=/css/i;
let evalua=patron2.test(texto); //*evalua si esta o no y devuelve true o false
if(evalua)
{
    evalua=` Si está disponible`;
}
else
{
    evalua=` No está disponible`;
}
document.getElementById('respuesta').innerHTML=evalua;

//* este es el metodo mas empleado, tratando el patroncomo un objeto

const obj=/Cursos/.exec(`Las mejores opciones en Cursos...`); //*se ejecutatodo en esta linea, creando un objeto
document.getElementById('salida').innerHTML=`Hemos encuntrado la cadena '${obj[0]}' en la posición ${obj.index} del texto: '${obj.input}'`;

