
#TODO realizar la conexion con la base de datos postgres
import psycopg2
conexion=psycopg2.connect(user='postgres',password='240296',host='127.0.0.1',port='5432',database='diplomado')
cursor=conexion.cursor() #tiket

nombre=input('nombre del continente: ')
descripcion=input('Descripcion del continente: ')
estatus=input('Estatus del continente: ')
sql=f"""insert into ubicacion.continente(nom_con,des_con,est_con) values('{nombre}','{descripcion}','{estatus}')"""
cursor.execute(sql) #se ejecuta el sql en la base
conexion.commit()

retorno=cursor.rowcount #cuenta las nuevas filas, para confirmar si se hizo o no el insert
print(f'Se agregó {retorno} nuevo continente')

cursor.close()
conexion.close()