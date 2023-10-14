const express=require('express'); //*Lamamos a expressJS
const app=express(); //*Invocamos mediante su clase

//Prueba basica
app.listen(5050,()=>{
    console.log(5050,'Estamos run desde http://127.0.0.1:5050');
});

//*enrrutamos manualmente a la raiz
/* app.use('/',(require,response)=>{
    response.send('<h1>Activo el server...</h1>');
    response.end;
}); */

//*Referenciamos al enrrutador
app.use('/',require('./router'));

//*invocamos al motor de plantillas de EJS
app.set('view engine','ejs');