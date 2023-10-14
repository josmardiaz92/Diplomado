const http=require('http');
const hostname='127.0.0.1';
const port=5050;

const server=http.createServer((request,response)=>{
    response.statusCode=200; //*la peticion fue exitosa
    response.setHeader('Content-Type','text/plain'); //*comienza a crear el sitio
    response.write('Mi primera APP desde NodeJS\n');
    response.end('Hola Mundo'); 
});

server.listen(port,hostname,()=>{
    console.log(`El servidor se está ejecuatando en http://${hostname}:${port}`);
});

//TODO debe instalarse el init ---- npm init -y, esto es para ir uniendo los modulos
//*Generará un json con la descripcion del proyecto, toma un archivo por defaul, se muestra donde se quiere que arranque el proyecto y mas

//TODO npm install express ejs mysql nodemon