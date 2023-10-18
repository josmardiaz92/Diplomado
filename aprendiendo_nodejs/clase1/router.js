const express=require('express'); //*llamamos a express
const conexion=require('./database/db'); //*agregamos la referencia a la conexion con la bd
const router=express.Router(); //*invocamos al modulo de enrrutamiento de expressJS

//*creamos una nueva ruto
/* router.get('/contacto',(request,response)=>{
    response.send('CONTACTO');
}); */
router.get('/zona_horaria',(request,response)=>{
    /* conexion.query('select * from usuario',(error,results)=>{
        if(error){
            throw error; //muestra el error por consola
        }else{
            //response.send(results); //*envia los resultados por consola
            response.render('index.ejs',{results:results}); //*cuando reciba la ruta indicada, lo lleva a index.ejs
        }
    }); */
    /* conexion.query('select * from continente',(error,results)=>{
        if(error){
            throw error; //muestra el error por consola
        }else{
            //response.send(results); //*envia los resultados por consola
            response.render('continente/index.ejs',{results:results}); //*cuando reciba la ruta indicada, lo lleva a index.ejs
        }
    }); */
    /* conexion.query('select p.*, c.nom_con  from pais as p inner join continente as c on p.fky_con=c.cod_con',(error,results)=>{
        if(error){
            throw error; //muestra el error por consola
        }else{
            //response.send(results); //*envia los resultados por consola
            response.render('pais/index.ejs',{results:results}); //*cuando reciba la ruta indicada, lo lleva a index.ejs
        }
    }); */
    /* conexion.query('select e.*, p.nom_pai  from estado as e inner join pais as p on e.fky_pai=p.cod_pai',(error,results)=>{
        if(error){
            throw error; //muestra el error por consola
        }else{
            //response.send(results); //*envia los resultados por consola
            response.render('estado/index.ejs',{results:results}); //*cuando reciba la ruta indicada, lo lleva a index.ejs
        }
    }); */
    /* conexion.query('select c.*, e.nom_est, zh.nom_zon  from ciudad as c inner join estado as e on c.fky_est=e.cod_est inner join zona_horaria as zh on c.fky_zon=zh.cod_zon',(error,results)=>{
        if(error){
            throw error; //muestra el error por consola
        }else{
            //response.send(results); //*envia los resultados por consola
            response.render('ciudad/index.ejs',{results:results}); //*cuando reciba la ruta indicada, lo lleva a index.ejs
        }
    }); */
    conexion.query('select * from zona_horaria',(error,results)=>{
        if(error){
            throw error; //muestra el error por consola
        }else{
            //response.send(results); //*envia los resultados por consola
            response.render('zona_horaria/index.ejs',{results:results}); //*cuando reciba la ruta indicada, lo lleva a index.ejs
        }
    });


});

module.exports=router; //*exportamos el enrrutador para poder utilizarlo desde la app