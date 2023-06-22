const formu=document.querySelector('#formulario');
const comunicacion=(evento)=>{
    evento.preventDefault();
    
    const texto=evento.target.texto.value;
    const busqueda=evento.target.buscar.value; //!concatenar 

    const buscador=/ola/i.exec(texto);
    document.getElementById('salida').innerHTML=buscador[0];
    

};
formu.addEventListener('submit',comunicacion);