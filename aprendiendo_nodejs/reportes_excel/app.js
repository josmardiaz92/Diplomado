/* //* instalamos el modulo xlsx npm install xlsx
const xlsx=require('xlsx');
const cargar=(ruta)=>{
    const libro=xlsx.readFile(ruta); //tomamos el nombre del libro
    const tituloHojas=libro.SheetNames; //tomamos el nombre de las hojas
    //console.log(tituloHojas);
    //cargo las hojas en un Json
    const hoja=tituloHojas[0];
    const datosHojas=xlsx.utils.sheet_to_json(libro.Sheets[hoja]);
    console.log(datosHojas);
    //mostrar dentyro de un ciclo todos los registros JSON
    for(const fila of datosHojas){
        console.log(fila['color'], fila['HEX_CODE']);
    }
    //oytra forma de consultar el JSON
    datosHojas.forEach(elemento=>{
        console.log(elemento);
    })
}

cargar('datos.xlsx'); */

const express=require('express'); //*Lamamos a expressJS
const app=express(); //*Invocamos mediante su clase

//Prueba basica
app.listen(5050,()=>{
    console.log(5050,'Estamos run desde http://127.0.0.1:5050');
});

app.use(express.urlencoded({extended:false}));
app.use(express(express.json));

//*Referenciamos al enrrutador
app.use('/',require('./router'));

//*invocamos al motor de plantillas de EJS
app.set('view engine','ejs'); 
