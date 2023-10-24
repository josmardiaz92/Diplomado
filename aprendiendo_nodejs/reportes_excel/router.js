const express=require('express'); //*llamamos a express
const router=express.Router(); //*invocamos al modulo de enrrutamiento de expressJS
const cargar=require('./funciones/cargar');



router.get('/',(request,response)=>{
    response.send(cargar('datos.xlsx'));
})

module.exports=router; //*exportamos el enrrutador para poder utilizarlo desde la app