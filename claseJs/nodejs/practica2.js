let seccion=[{ dni: '27239205',
    apellidos: 'Colmenares Matheus',
    nombres: 'Joseir Ezequiel',
    genero: 'Masculino',
    edad: 24,
    estatus: true
},
{
    dni: '21410757',
    apellidos: 'Diaz Zambrano',
    nombres: 'Josmar Alejandro',
    genero: 'Masculino',
    edad: 30,
    estatus: true
},
{
    dni: '30023909',
    apellidos: 'Useche montes',
    nombres: 'Jose Raul',
    genero: 'Masculino',
    edad: 21,
    estatus: true
},
{
    dni: '27815654',
    apellidos: 'Madrid González',
    nombres: 'Francisco Daniel',
    genero: 'Masculino',
    edad: 22,
    estatus: true
},
{
    dni: '30339186',
    apellidos: 'Guerrero Colmenares',
    Nombre: 'Iván Jesus',
    genero: 'Masculino',
    edad: 19,
    estatus: true
},
{
    dni: '31890687',
    apellidos: 'Toth Ramirez',
    nombres: 'Istvan Toth',
    genero: 'Masculino',
    edad: 17,
    estatus: true
},
{
    dni: '30781897',
    apellidos : 'Sánchez Guerrero',
    nombres: 'Hernán Alejandro',
    genero: 'masculino',
    edad: 20,
    estatus: true
},
{
    dni: '18419488',
    apellidos: 'Delgado Blanco',
    nombres: 'Jassid Ruben',
    genero: 'Masculino',
    edad:36,
    estatus: true
},
{
    dni: '27893732',
    apellidos: 'Villasmil Silva',
    nombres: 'Francisco Javier',
    genero: 'Masculino',
    edad: 23,
    estatus: true
},
{
    dni: '29649159',
    apellidos: 'Villanueva Garcia',
    nombres: 'Sergio David',
    genero: 'Masculino',
    edad: 21,
    estatus: true
},
{
    dni:'28422121',
    apellidos: 'Zambrano Contreras',
    nombres: 'Diego Enrique',
    genero: 'Masculino',
    edad: 21,
    estatus: true
},
{
    dni: '31619279',
    apellidos: 'Benavides Madera',
    nombres: 'Jimmy Alejandro',
    genero: 'Masculino',
    edad: 16,
    estatus: true
}
];

seccion.forEach((lista,index)=>{
    console.log(`Persona: ${index+1} \nCédula: ${lista.dni} \nApellido: ${lista.apellidos} \nNombre: ${lista.nombres} \nGénero: ${lista.genero} \nEdad: ${lista.edad} \n`);
});