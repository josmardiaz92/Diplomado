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
            response.render('index',{results:results}); //*cuando reciba la ruta indicada, lo lleva a index.ejs
        }
    });
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
router.get('/delete/:id&:ident',crud.delete);
router.get('/ciudad_listar',(request,response)=>{
    conexion.query('select c.*, e.nom_est, zh.nom_zon  from ciudad as c inner join estado as e on c.fky_est=e.cod_est inner join zona_horaria as zh on c.fky_zon=zh.cod_zon',(error,results)=>{
        if(error){
            throw error; //muestra el error por consola
        }else{
            response.render('ciudad_listar',{results:results}); //*cuando reciba la ruta indicada, lo lleva a index.ejs
        }
    });
});
router.get('/continente_listar',(request,response)=>{
    conexion.query('select * from continente',(error,results)=>{
            if(error){
                throw error; //muestra el error por consola
            }else{
                response.render('continente_listar',{results:results}); //*cuando reciba la ruta indicada, lo lleva a index.ejs
            }
        });
});
router.get('/estado_listar',(request,response)=>{
    conexion.query('select e.*, p.nom_pai  from estado as e inner join pais as p on e.fky_pai=p.cod_pai',(error,results)=>{
        if(error){
            throw error; //muestra el error por consola
        }else{
            response.render('estado_listar',{results:results}); //*cuando reciba la ruta indicada, lo lleva a index.ejs
        }
    });
});
router.get('/pais_listar',(request,response)=>{
    conexion.query('select p.*, c.nom_con  from pais as p inner join continente as c on p.fky_con=c.cod_con order by cod_pai',(error,results)=>{
        if(error){
            throw error; //muestra el error por consola
        }else{
            response.render('pais_listar',{results:results}); //*cuando reciba la ruta indicada, lo lleva a index.ejs
        }
    });
});
router.get('/zona_horaria_listar',(request,response)=>{
    conexion.query('select * from zona_horaria',(error,results)=>{
        if(error){
            throw error; //muestra el error por consola
        }else{
            response.render('zona_horaria_listar',{results:results}); //*cuando reciba la ruta indicada, lo lleva a index.ejs
        }
    });
});
router.get('/continente_agregar',(request,response)=>{
    response.render('continente_agregar');
});
router.get('/continente_editar/:cod_con',(request,response)=>{
    const cod_con=request.params.cod_con;
    conexion.query('select * from continente where cod_con=?',[cod_con],(error,results)=>{
        if(error){
            throw error;
        }else{
            response.render('continente_editar',{continente:results[0]});
        }
    })
});
router.get('/pais_agregar',(request,response)=>{
    conexion.query('select * from continente',(error,results)=>{
        if(error){
            throw error;
        }else{
            response.render('pais_agregar',{results:results}); 
        }
    });
});
router.get('/pais_editar/:cod_pai',(request,response)=>{
    const cod_pai=request.params.cod_pai;
    // Realiza un select a la tabla pais para obtener el registro de la línea 1
    conexion.query('select * from pais where cod_pai=?',[cod_pai],(error,results)=>{
        if(error){
            throw error;
        }else{
            // Obtiene el valor del fky del registro
            const cod_con = results[0].cod_con;

            // Realiza un select a la tabla continente para obtener todos los posibles valores del fky
            conexion.query('select * from continente',(error,results2)=>{
                if(error){
                    throw error;
                }else{
                    // Renderiza la página de edición del país, pasando los resultados de ambos selects
                    response.render('pais_editar',{pais:results[0],continentes:results2});
                }
            });
        }
    });
});

module.exports=router; //*exportamos el enrrutador para poder utilizarlo desde la app