const formu=document.querySelector('#formulario');
const comunicacion=(evento)=>{
    evento.preventDefault();
    
    const texto=evento.target.texto.value;
    const busqueda=evento.target.buscar.value;
    const patronBusqueda=new RegExp(busqueda, "i").exec(texto);
    let buscador=texto.match(patronBusqueda);
    buscador=`El texto encontrado es: <span class="spanbuscador">${buscador}</span>`;
    document.getElementById('salida').innerHTML=buscador;
};
formu.addEventListener('submit',comunicacion);