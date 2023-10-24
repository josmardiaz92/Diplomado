const xlsx=require('xlsx');

const cargar=(ruta)=>{
    const libro=xlsx.readFile(ruta); //tomamos el nombre del libro
    const tituloHojas=libro.SheetNames;
    const hoja=tituloHojas[0];
    const datosHojas=xlsx.utils.sheet_to_json(libro.Sheets[hoja]);
    return datosHojas
}

module.exports=cargar;