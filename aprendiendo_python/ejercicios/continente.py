
#TODO cuando son librerias hechas por nosotros, hay que colocarles apodos 
import seguridad as sec

class continente(sec.seguridad):
    def __init__(self):
        self.cod_con=''
        self.nom_con=''
        self.des_con=''
        self.est_con=''

    def agregar_continente(self):

        sql=f"""insert into ubicacion.continente(nom_con,des_con,est_con) values ('{self.nom_con}','{self.des_con}','{self.est_con}') returning cod_con"""

        self.cursor.execute(sql) #*se ejecuta el insert
        self.conexion.commit() #*confirmamos que queremos hacer el insert
        contador=self.cursor.rowcount #*devuelve las lineas insertadas

        if contador==1:
            lista=self.cursor.fetchall() #*Trae List[tuple[]]
            for tupla in lista:
                print(tupla[0])
        else:
            False

c=continente() #*instanciamos un objeto de la clase continente
c.conectar()
c.nom_con='corolandio2'
c.des_con='corotito'
c.est_con='A'
c.agregar_continente()
c.cerrar()
