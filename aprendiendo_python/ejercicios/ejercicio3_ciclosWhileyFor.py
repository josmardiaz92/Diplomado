
#TODO Objetivo 1: ciclo while
paises=['Venezuela','Colombia','Brasil','España','Argentina','Italia']

nro_pai=len(paises)
con=0

print('Lista paises recorrida con el ciclo while')

while con<nro_pai:
    print(f'El pais número {con+1} es {paises[con]}')
    con=con+1
else:
    print('Ya no hay mas paises')

#TODO Objetivo 2: ciclo for

print('Lista paises recorrida con el ciclo for')

for nom_pai in paises:
    print(f'El pais número {paises.index(nom_pai)+1} es {nom_pai} ')

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

for data in mundo.values():
    print(f'La data del mundo es {data}')