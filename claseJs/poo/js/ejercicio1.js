class Peliculas{    //*creacion de la clase
    //todo Creacion de propiedades privadas
    #id;
    #titulo;
    #genero;
    #duracion;
    #clase    
    //todo Propiedades
    constructor(id,titulo,genero,duracion,clase){
        this.#id=id;
        this.#titulo=titulo;
        this.#genero=genero;
        this.#duracion=duracion;
        this.#clase=clase;
    }
    //todo Metodos
    consultar(){ //todo Si agrego los # en la consulta, no necesito el Getter.
        let salida=`ID: ${this.#id}, Título: ${this.#titulo}, Género: ${this.#genero}, Duración: ${this.#duracion}, Clase: ${this.#clase}`;
        let clasificacion=this.clase;
        if(clasificacion=='A')
        {
            salida+=`, Nota: Apta para todo público`;
        }if(clasificacion=='B')
            {
                salida+=`, Nota: Apta para mayores de 16 años de edad`;
            }
        console.log(salida);
    }
    /* //todo Getter->Leer
    //*para poder leer lo privado
    get id(){return this.#id;};
    get titulo(){return this.#titulo;};
    get genero(){return this.#genero;}; */

    //todo Setter->Escribir
    //*Espara poder escribir sobre lo privado
    set titulo(nuevo_titulo){this.#titulo=nuevo_titulo};
    set genero(nuevo_genero){this.#genero=nuevo_genero};
};

class Series extends Peliculas{ //*Creacion de la clase hija
    #temporada
    #episodio
    constructor(id,titulo,genero,duracion,clase,temporada,episodio){
        super(id,titulo,genero,duracion,clase); //todo esto se envia a la clase padre
        this.#temporada=temporada;
        this.#episodio=episodio;
    }
    consultar(){
        let informacion=`Temporada ${this.#temporada}, Episodios ${this.#episodio.toString()}`;
        super.consultar();
        console.log(informacion);
    }
}

const pelicula1=new Peliculas('1','La Fuga','Acción',2.23,'B'); //*instanciar a la clase peliculas
const serie1=new Series(id='1',titulo='Exploradores del Hielo',genero='Suspenso',duracion=1.32,clase='B',temporada='01',episodio=[1,2,3,4,5,6,7,8]); //*instanciar a la clase series,hija de la clasepeliculas


/* console.log(pelicula1);
console.log(pelicula1.titulo); //*Asi se ve algo parcial del objeto
console.log(pelicula1['genero']); //*Asi tambien */
console.log(pelicula1.consultar()); //*instanciar el Metodo

const pelicula2=new Peliculas('2','Maravillas','Infantil',1.45,'A'); //*instanciar a la clase peliculas

pelicula2.consultar(); //* solo ejecuta el metodo

const pelicula3=new Peliculas('3','Sherk','Animación',1.20,'A'); //*instanciar a la clasepeliculas

console.log('Original: ');
pelicula3.consultar();
pelicula3.id='4';
pelicula3.titulo='Escapada';
pelicula3.genero='Terror';
console.log('Modificada: ');
pelicula3.consultar();

serie1.consultar();
