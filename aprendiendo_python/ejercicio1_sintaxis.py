
# TODO Objetivo 1: Crear comentarios.
#Este es mi primer comentario.

""" Este es un comentario demultipleslineas en Python """

# TODO Objetivo 2: declarar variables
#*Variables entereas
nro_con=6 #continentes
nro_pai=195 #paises
nro_est=23 #estados de Vzla
nro_ciu=100 #ciudades con masde 50.000 habitantes
nro_zon=1 #zonas horarias de Vzla

#*Variables reales
pro_vid=71.1 #promedio de vida en Vzla
tas_cam=29.21 #tasa de cambio
por_imp=16.00

#*Variables de cadenas
nom_pai="Venezuela"
cap_pai='Caracas'
des_pai="""Venezuela es unpais de la costa norte de 
América del Sur con diversas atracciones naturales.
Tiene Montañas, Desiertos,Selva y llanuras"""

#*Variables booleanas
mun_bei=True
mun_fut=False

#*Datos importantes
# !  no se recomienda mucho, al menos de estar completamente seguros de...
num_hab, cti_pai, fec_ind= 30000000, '+58', 1811

# TODO Objetivo 3: Funciones Básicas

#*Print --para escribir
print('Bienvenidos a Python')

#*input --parapedir datos al usuario
print('Ingrese la tasa de cambio del día de hoy: ')
tas_cam=input()
print(f'La tasa de cambio actualizada para {nom_pai} es de {tas_cam} Bs/Usd')

print(f'Por favor, ingrese el precio del diplomado en dólares')
pre_dip=input()

print(f'¿Desea factura legal? S/N')
fac_leg=input().upper() #*Agarra el valor del input y lo pasa a mayusculas.

#*float --para convertir un stringa real

# TODO Objetivo 4: Inferencia de Datos
"""
#*Alternativa n° 1
print('En suramérica se encuentra  %s, cuya capital es %s y tiene %d estados'%(nom_pai,cap_pai,nro_est))

#*Alternativa n° 2
print('El promedio de vida en {} es de {} años'.format(nom_pai,pro_vid))

#*Alternativa n° 3 (Recomendada)
print(f'El número de habitantes en {nom_pai} es de {num_hab}')
print(f'La tasa de cambio para {nom_pai} es {tas_cam}')
"""

# TODO Objetivo 5: Operadores Arisméticos

#*Como las variables vienen de un input, son cadenas y hay que convertirlos, en este caso en decimales
pre_vef=float(tas_cam)*float(pre_dip)

# TODO Objetivo 6: Condicionales

if fac_leg=='S':
    iva_vef=pre_vef*(por_imp/100) #Impuestos
    bas_imp=pre_vef-iva_vef #base imponible
    print(f"""
    El precio del Diplomado en Bs es: {pre_vef}
    La base imponible es: {bas_imp}
    El impuesto a pagar es: {iva_vef}""")
else:
    print(f'El precio del Diplomado es de Bs: {pre_vef}')


