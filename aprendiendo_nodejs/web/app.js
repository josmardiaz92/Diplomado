const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");
const port=process.env.PORT||3000;
const app=express();


//procesando los datos del cuerpo de la solicitud
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());


app.listen(port,()=>{
    console.log(`Acceso al server: http://localhost:${port}`);
});

//*Referenciamos al enrrutador
app.use('/',require('./router'));

//*invocamos al motor de plantillas de EJS
app.set('view engine','ejs'); 