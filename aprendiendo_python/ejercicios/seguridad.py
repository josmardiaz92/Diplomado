import psycopg2
class seguridad:
    def __init__(self):
        self.conexion=''
        self.cursor=''
    
    def conectar(self):
        self.conexion=psycopg2.connect(user='postgres',password='240296',host='127.0.0.1',port='5432',database='diplomado')
        self.cursor=self.conexion.cursor()

    def cerrar(self):
        self.cursor.close()
        self.conexion.close()