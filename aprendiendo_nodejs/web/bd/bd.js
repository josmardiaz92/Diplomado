const pg=require("pg");

//referenciamos al objeto Client del modulo para SGBD
const { Client }=require("pg");

const conexion=new Client({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:"240296",
    database:"diplomado"
});

module.exports=conexion;