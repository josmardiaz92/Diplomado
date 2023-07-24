let estructura=[
    {ci:18419488,
    nom:'Jassid Ruben',
    ape: 'Delgado Blanco',
    gen:'Masculino',
    eda:36},
    {ci:30201716,
    nom:'Ana Celeste',
    ape: 'Arias Escalante',
    gen:'Femenino',
    eda:19}
]
let x=0;
let n=estructura.length;
for(x=0;x<n;x++)
{
    console.log(estructura[x].ape);
    console.log(estructura[x].nom);
    console.log(estructura[x].gen);
}