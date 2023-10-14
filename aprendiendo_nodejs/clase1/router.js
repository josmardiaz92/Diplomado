const express=require('express'); //*llamamos a express
const conexion=require('./database/db'); //*agregamos la referencia a la conexion con la bd
const router=express.Router(); //*invocamos al modulo de enrrutamiento de expressJS

//*creamos una nueva ruto
/* router.get('/contacto',(request,response)=>{
    response.send('CONTACTO');
}); */
router.get('/',(request,response)=>{
    conexion.query('select * from usuario',(error,results)=>{
        if(error){
            throw error; //muestra el error por consola
        }else{
            response.send(results); //*envia los resultados por consola
        }
    })
});

module.exports=router; //*exportamos el enrrutador para poder utilizarlo desde la app