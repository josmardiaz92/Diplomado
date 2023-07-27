
#TODO Objetivo 1: listas
#* crear una lista vacia
paises=list()
#* crear una lista vacia
paises=[]
#* crear una lista con sus valores
paises=['Venezuela','Colombia','Brasil','España','Argentina','Italia']

#*imprimiendo todos los paises
print('Paises: ',paises)

#*imprimiendo el pais n°2
print('Pais N°2 es: ',paises[2])

#*ordenar la lista
paises.sort()
print('Paises: ',paises)

#*Imprimir elpais N°2
print('Pais N°2 es: ',paises[2])

#*Agregar un nuevo pais deultimo
paises.append('Uruguay')
print('Paises: ',paises)

#*Agregar un pais en laposicion N° 2
paises.insert(2,'Australia')
print('Paises: ',paises)

#*Imprimirelpenultimo pais
print('penultimo pais: ',paises[len(paises)-2])
print('penultimo pais: ',paises[-2])

#*Imprimir los primeros 3 paises, el 1er parametro me dice desde dondey el 2do me indica hasta donde.tambien llamado slide
print('primeros e paises :',paises[0:3])

#TODO Objetivo 2: tuplas
#*Crear una tupla vacia
continentes=tuple()
#*Crear una tupla vacia
continentes=()
#*Crear una tuplacon sus valores
continentes=('América','Asia','Europa','Antartida','Oceania','Afríca')

#*imprimir una tupla
print('Continentes: ',continentes)

#*contar
print(f'Europa aparece {continentes.count("Europa")} vez en esta tupla')
print('Europa aparece',continentes.count("Europa"),'vez en esta tupla')

#*posicion de africa
print('Afreca aparece en la posicion:',continentes.index('Afríca'),'de la tupla')

#*Contar loselementos de la tupla
print('Esta tupla contiene',len(continentes),'elementos')

#*ver el continente N°2
print('El continente N° 2 es: ',continentes[2])

#TODO Objetivo 3: sets
#*Crear un set vacio
estados=set()
#*Crear un set vacio
estados={}
#*Crear un set con sus valores
estados={'Táchira','Mérida','Trujillo','Zulia','Lara','Barinas'}

#*Imprimir los estados. al imprimir, los muestra de forma desordenada 
print('Estados: ',estados)

#*Agregar un nuevo estado
estados.add('Falcon')
print('Estados: ',estados)

#*Intentando agregar a trujillo,que ya esta
estados.add('Trujillo')
print('Estados: ',estados) #no lo agrega, pero no manda error

#*saber si un valor esta dentro del set
print('Mérida' in estados) #arroja true o false


#TODO Objetivo 4: diccionarios
#*Crear diccionario vacio
mundo=dict()
#*Crear diccionario vacio
mundo={}
#*Crear diccionario con valores
mundo={
    'nro_con':6,
    'nro_pai':195,
    'nro_per':8000000000,
    'continentes':[
        'América',
        'Asia',
        'Europa',
        'Antartida',
        'Oceania',
        'Afríca'
        ],
    'paises':{
        'Argentina':'Buenos Aires',
        'Colombia':'Bogotá',
        'Ecuador':'Quito',
        'España':'Madrid',
        'Venezuela':'Caracas'
    }
}

#*Imprimir eldiccionario
print('Los datos denuestro planeta:',mundo)

#*El planeta tierra tiene 8000000000 de habitantes
print('El planeta tierra tiene',mundo['nro_per'],'de habitantes')

#*Elplaneta tierra tiene estos continentes
print('El planeta tierra tiene estos continentes:',mundo['continentes'])

#*Nosotros vivimos en este continente
print('Nosotros vivimos en este continente:',mundo['continentes'][0])

#*Imprimir paises
print('paises:',mundo['paises'])

#*Imprimir caracas
print('La capital de venezuela es:',mundo['paises']['Venezuela'])
print('La capital de venezuela es:',mundo['paises'].get('Venezuela')) #Asi no me arroja error en caso de que no este

#*Imprimir lasllaves del diccionario
print('Las llaves del diccionario son',mundo.keys())

#*Imprimir los valores del diccionario
print('Los valores del diccionario son',mundo.values())

#*Acceder a un elemento pornombre declave, genera un error si la clave no existe. para evitar eso, usamos el metodo get

print('Obtiene el diccionario o none si no existe',mundo.get('no_con')) #none
print('Obtiene el diccionario o none si no existe',mundo.get('nro_con')) #si da