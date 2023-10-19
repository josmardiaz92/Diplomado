const express=require('express'); //*llamamos a express
const conexion=require('./database/db'); //*agregamos la referencia a la conexion con la bd
const router=express.Router(); //*invocamos al modulo de enrrutamiento de expressJS
const crud=require('./controllers/crud');

//*creamos una nueva ruto
/* router.get('/contacto',(request,response)=>{
    response.send('CONTACTO');
}); */
router.get('/',(request,response)=>{
    conexion.query('select * from usuario',(error,results)=>{
        if(error){
            throw error; //muestra el error por consola
        }else{
            //response.send(results); //*envia los resultados por consola
            response.render('index',{results:results}); //*cuando reciba la ruta indicada, lo lleva a index.ejs
        }
    });
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
    /* conexion.query('select * from zona_horaria',(error,results)=>{
        if(error){
            throw error; //muestra el error por consola
        }else{
            //response.send(results); //*envia los resultados por consola
            response.render('zona_horaria/index.ejs',{results:results}); //*cuando reciba la ruta indicada, lo lleva a index.ejs
        }
    }); */


});
router.get('/create',(request,response)=>{
    response.render('create');
})
router.post('/save',crud.save);
router.get('/edit/:id',(request,response)=>{
    const id=request.params.id;
    conexion.query('select * from usuario where id=?',[id],(error,results)=>{
        if(error){
            throw error;
        }else{
            response.render('edit',{user:results[0]});
        }
    })
})
router.post('/update',crud.update);
module.exports=router; //*exportamos el enrrutador para poder utilizarlo desde la app