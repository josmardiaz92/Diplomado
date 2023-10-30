const pdfmake=require('pdfmake');
const fs=require('fs'); //file sistem o manejador de archivos

//constantes para llamar los archivos creados
const fonts=require('./fonts');
const styles=require('./styles');
const {content}=require('./pdfContent'); //se esta tratando como objeto

//activamos en una constante la libreria o modulo
const PdfPrinter=require('pdfmake');

let docDefinition={
    content:content,
    styles:styles
};

//instanciamos el paquete a utilizar
const printer=new PdfPrinter(fonts);

//usamos la libreria para crear el pdf
let pdfDoc=printer.createPdfKitDocument(docDefinition);
pdfDoc.pipe(fs.createWriteStream('pdf/pdfTest.pdf'));
pdfDoc.end();


