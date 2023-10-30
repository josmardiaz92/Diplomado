// Importar el gráfico desde generarGrafico.js
const { chart } = require('./generarGrafico');

// Convertir el gráfico a una imagen base64
var chartImage = chart.toBase64Image();
module.exports={
    content:[
        {
            image:'logo.png',
            width:150,
            height:150,
            opacity:1,
            style:'imagen'
        },
        {text:'Ingenieria Digital Plus',style:'titulo'},
        {text:'Somos una empresa privada de capacitación ubicada en San Cristóbal, Estado Táchira, Venezuela, fundada en el año 2011, con la finalidad de brindar asesoramiento y capacitación al sector universitario, profesional y empresarial mediante cursos presenciales en las áreas de Ingeniería, Arquitectura, Diseño Gráfico, Electrónica y afines.. Verás las clases en nuestras instalaciones, un espacio de aprendizaje con todas las comodidades necesarias para garantizar tu aprendizaje y un computador para cada participante. Cada uno de nuestros profesores está especializado en su área, recibirás una educación de alto nivel. La ventaja de hacer nuestros cursos de forma presencial es que podrás concentrarte en aprender, será tu horario de estudio que nadie podrá interrumpir.\n',style:"parrafo"},
        
        {
			style: 'tableExample',
			table: {
				body: [
					[{text:'Código', alignment: 'center'}, {text:'Cursos', alignment: 'center'}, {text:'Status', alignment: 'center'}],
					[{text:'1', alignment: 'center'}, 'Diplomado de programacion', 'Activo'],
                    [{text:'2', alignment: 'center'}, 'Diseño Gráfico', 'Activo'],
                    [{text:'3', alignment: 'center'}, 'Excel', 'Activo'],
                    [{text:'4', alignment: 'center'}, 'JavaScripts', 'Activo']
				]
			},
            layout: {
				fillColor: function (rowIndex, node, columnIndex) {
					return (rowIndex % 2 != 0) ? '#CCCCCC' : null;
				}
			}
		}
    ]
};