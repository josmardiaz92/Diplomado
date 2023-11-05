const express=require('express'); //*llamamos a express
const router=express.Router(); //*invocamos al modulo de enrrutamiento de expressJS
const conexion=require("./bd/bd");
const crud=require("./controladores/crud");
conexion.connect();

//ruta de prueba de la API back-end
router.get("/",(req,res)=>{
    res.send("Aqui estamos");
    conexion.end;
});

router.get("/continente",(req,res)=>{
    conexion.query('select * from ubicacion.continente order by nom_con',(err,response)=>{
        if(!err){
            res.json(response.rows);
            conexion.end;
        }else{
            console.log('error: '+err.message);
            conexion.end;
        }
    });
})
router.get("/pais",(req,res)=>{
    conexion.query('select p.*, c.nom_con  from ubicacion.pais as p inner join ubicacion.continente as c on p.fky_con=c.cod_con order by nom_pai',(err,response)=>{
        if(!err){
            res.json(response.rows);
            conexion.end;
        }else{
            console.log('error: '+err.message);
            conexion.end;
        }
    });
});
router.get('/estado',(req,res)=>{
    conexion.query('select e.*, p.nom_pai  from ubicacion.estado as e inner join ubicacion.pais as p on e.fky_pai=p.cod_pai order by nom_est',(err,response)=>{
        if(!err){
            res.json(response.rows);
            conexion.end;
        }else{
            console.log('error: '+err.message);
            conexion.end;
        }
    });
});
router.get('/ciudad',(req,res)=>{
    conexion.query('select c.*, e.nom_est, zh.nom_zon  from ubicacion.ciudad as c inner join ubicacion.estado as e on c.fky_est=e.cod_est inner join ubicacion.zona_horaria as zh on c.fky_zon=zh.cod_zon order by nom_ciu',(err,response)=>{
        if(!err){
            res.json(response.rows);
            conexion.end;
        }else{
            console.log('error: '+err.message);
            conexion.end;
        }
    });
});
router.get('/zona_horaria',(req,res)=>{
    conexion.query('select * from ubicacion.zona_horaria order by nom_zon',(err,response)=>{
        if(!err){
            res.json(response.rows);
            conexion.end;
        }else{
            console.log('error: '+err.message);
            conexion.end;
        }
    });
});

router.get('/pais_agregar',(req,res)=>{
    conexion.query('select * from ubicacion.continente',(err,response)=>{
        if(!err){
            res.json(response.rows);
            conexion.end
        }else{
            console.log('error: '+err.message);
            conexion.end;
        }
    })
});
router.get('/estado_agregar',(req,res)=>{
    conexion.query('select * from ubicacion.pais',(err,response)=>{
        if(!err){
            res.json(response.rows);
            conexion.end
        }else{
            console.log('error: '+err.message);
            conexion.end;
        }
    })
});
router.get('/ciudad_agregar',(req,res)=>{
    conexion.query('select * from ubicacion.estado',(err,response)=>{
        if(!err){
            conexion.query('select * from ubicacion.zona_horaria',(err,response2)=>{
                if(!err){
                    const data = {
                        estados: response,
                        zonas_horarias: response2
                    };
                    res.json(data);
                    conexion.end
                }else{
                    console.log('error: '+err.message);
                    conexion.end;
                }
            });
        }else{
            console.log('error: '+err.message);
            conexion.end;
        }
    });
});

router.post("/save",crud.save);



module.exports=router; //*exportamos el enrrutador para poder utilizarlo desde la app