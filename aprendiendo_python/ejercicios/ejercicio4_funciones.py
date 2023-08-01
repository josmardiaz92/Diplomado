
#TODO Objetivo 1: Funciones sin parametros
#*Declaración
def mostrarBienvenida():
    print(f'Bienvenidos a nustra red social')

#*LLamada
mostrarBienvenida()

#TODO Objetivo 2: Funciones con parametros fijos
""" print('Por favor, ingrese la tasa de cambio: ')
tasa=input()
print('Por favor, ingrese el precio en dolares: ')
precio=input() """

def calcularCambio(tas_cam,pre_dol):
    calculo=float(tas_cam)*float(pre_dol)
    return calculo #*Se debecolocar el return

""" total=calcularCambio(tasa,precio) 

print(f'El total a pagar es de {total} Bs.') """

#TODO Objetivo 3: Funciones con parametros variableso dinámicos
#*Básicamente, el parametro que se declaracomodinámico se va a tomar como una lista,lo que permite que su tamaño sea variable
#*Con el "*" antes del parametro, se indica que es un parametro dinámico
def paisesClasificados(confederacion,*paises): 
    for pais in paises:
        print(f'Pais clasificado: {pais} de la confederación: {confederacion}')

paisesClasificados('América del sur','Brasil','Argentina','Ecuador','Uruguay')
paisesClasificados('Europa','Serbia','Dinamarca','España','Paises Bajos')
