//*interacctuando con el DOM
const $g1=document.querySelector('#g1');
const etiquetas=['Lunes','Martes','Miercoles','Jueves']; //*titulos del eje x
const produccion1={ //*datos a graficar (pueden ser varias series)
    label: 'Producción Semana 1',
    data:[78,208,100,75], //*la cantidad de valores deben ser igual ala cantidad de etiquetas
    backgroundColor:'rgba(0,100,0,0.5)', //*color de fondo
    borderColor:'rgba(0,100,0,1)', //*color del borde
    borderWidth:1, //*ancho del borde
};
const produccion2={
    label: "Producción Semana 2",
    data: [189, 45, 8, 200], // Arreglo tiene la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(255, 58, 41, 0.5)', // Color de fondo
    borderColor: 'rgba(255, 58, 41, 1)', // Color del borde
    borderWidth: 1,// Ancho del borde
}
const produccion3={
    label: "Producción Semana 3",
    data: [200, 90, 1, 100], // Arreglo tiene la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(01, 58, 41, 0.5)', // Color de fondo
    borderColor: 'rgba(01, 58, 41, 1)', // Color del borde
    borderWidth: 1,// Ancho del borde
}
const produccion4={
    label: "Producción Semana 4",
    data: [150, 90, 1, 100], // Arreglo tiene la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(100, 01, 41, 0.5)', // Color de fondo
    borderColor: 'rgba(100, 01, 41, 1)', // Color del borde
    borderWidth: 1,// Ancho del borde
}
const produccion5={
    label: "Producción Semana 5",
    data: [1, 90, 1, 100], // Arreglo tiene la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(200, 150, 41, 0.5)', // Color de fondo
    borderColor: 'rgba(200, 150, 41, 1)', // Color del borde
    borderWidth: 1,// Ancho del borde
}

new Chart($g1,{
    type:'line',
    data:{
        label:etiquetas,
        datasets:[
            produccion1,
            produccion2,
            produccion3,
            produccion4,
            produccion5
        ]
    },
    options:{
        scales:{
            yAxes:[{
                ticks:{
                    beginAtZero:true
                }
            }],
        },
    }
});