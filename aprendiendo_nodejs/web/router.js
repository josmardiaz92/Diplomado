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
})

router.post("/save",crud.save);



module.exports=router; //*exportamos el enrrutador para poder utilizarlo desde la app