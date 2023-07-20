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

//Grafica de barras
const $g2=document.querySelector('#g2');
const titulos=['Camisas','Pantalones','Medias','Bufandas'];

const valores1={
    label: 'Producción semana 1',
    data:[78,208,100,75],
    backgroundColor:'rgba(232,255,41,0.5)',
    borderColor:'rgba(232,255,41,1)',
    borderWidth:1
};

const valores2={
    label: 'Producción semana 2',
    data:[189,45,8,200],
    backgroundColor:'rgba(255,58,41,0.5)',
    borderColor:'rgba(255,58,41,1)',
    borderWidth:1
};

const valores3={
    label: 'Producción semana 3',
    data:[345,187,216,97],
    backgroundColor:'rgba(58,41,255,0.5)',
    borderColor:'rgba(58,41,255,1)',
    borderWidth:1
};

//Grafica pie
const $g3=document.querySelector('#g3');
const cabecera=['Locales','Estadales','Nacionales','Internacionales'];

const numeros={
    data:[40,25,89,200],
    backgroundColor:[
        'rgba(120,18,18,0.5)',
        'rgba(22,18,120,0.5)',
        'rgba(43,250,2,0.5)',
        'rgba(255,41,242,0.5)'
    ],
    borderColor:[
        'rgba(120,18,18,1)',
        'rgba(22,18,120,1)',
        'rgba(43,250,2,1)',
        'rgba(255,41,242,1)'
    ],
    borderWidth:1
};

//Grafico de donas
const $g4=document.querySelector('#g4');
const arriba=['Hilos','Saten','Permalina','Lino'];

const muchos={
    data:[356,195,270,568],
    backgroundColor:[
        'rgba(26,188,156,0.5)',
        'rgba(211,84,0,0.5)',
        'rgba(121,125,127,0.5)',
        'rgba(91,44,111,0.5)'
    ],
    borderColor:[
        'rgba(26,188,156,1)',
        'rgba(211,84,0,1)',
        'rgba(121,125,127,1)',
        'rgba(91,44,111,1)'
    ],
    borderWidth:1
};

new Chart($g1,{
    type:'line',
    data:{
        label:etiquetas,
        datasets:[
            produccion1,
            produccion2,
            produccion3
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

new Chart($g2,{
    type:'bar',
    data:{
        labels:titulos,
        datasets:[
            valores1,
            valores2,
            valores3
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

new Chart($g3,{
    type:'pie',
    data:{
        labels:cabecera,
        datasets:[
            numeros
        ]
    },
});

new Chart($g4,{
    type:'doughnut',
    data:{
        labels:arriba,
        datasets:[
            muchos
        ]
    },
});
