
#TODO Objetivo 1: herencia simple

#TODO esta es la calse padre
class conexion:
    def __init__(self):
        self.servidor='localhost'
        self.usuario='postgres'
        self.clave=''
        self.bd='dilomado'
    def conectar(self):
        print('conexion')

#TODO otra clase padre
class utilidad:
    def __init__(self):
        print('utilidad iniciada')
    def formato_fecha(self):
        print('fecha formateada')
    def formato_moneda(self):
        print('moneda formateada')
    def formato_hora(self):
        print('hora formateada')

#TODO esta es la calse hijo
class estado(conexion,utilidad): #*Cuando se herada, se agrega la calse padre entre parentesis
    def __init__(self,cod_est,nom_est,des_est,fky_pai,est_est): 
        self.cod_est=cod_est
        self.nom_est=nom_est
        self.des_est=des_est
        self.fky_pai=fky_pai
        self.est_est=est_est
    def agregar_estado(self):
        conexion.__init__(self)
        conexion.conectar(self)
        utilidad.__init__(self)
        utilidad.formato_fecha(self)
        utilidad.formato_hora(self)
        utilidad.formato_moneda(self)
        agregar=f"""INSERT INTO ubicacion.estado (nom_est,des_est,fky_pai,est_est)
        VALUES ('{self.nom_est}','{self.des_est}',{self.fky_pai},'{self.est_est}';)"""
        print('Voy a hacer:')
        print(agregar)
    def editar_estado(self):
        conexion.__init__(self)
        conexion.conectar(self)
        self.nom_est='Gochilandia'
        self.des_est='andes'
        self.fky_pai=2
        self.est_est='I'
        editar=f"""UPDATE ubicacion.estado
        SET
        nom_est='{self.nom_est}', des_est='{self.des_est}',fky_pai={self.fky_pai},est_est='{self.est_est}'
        WHERE
        cod_est={self.cod_est};"""
        print('Voy a hacer:')
        print(editar)
    def eliminar_estado(self):
        conexion.__init__(self)
        conexion.conectar(self)
        eliminar=f"""UPDATE ubicacion.estado SET est_est='I' WHERE cod_est={self.cod_est};"""
        print('Voy a hacer:')
        print(eliminar)
    def delete_estado(self):
        conexion.__init__(self)
        conexion.conectar(self)
        delete=f"""DELETE FROM ubicacion.estado WHERE cod_est={self.cod_est};"""
        print('Voy a hacer:')
        print(delete)
    def listar_estado(self):
        conexion.__init__(self)
        conexion.conectar(self)
        listar=f"""SELECT * FROM ubicacion.estado"""
        print('Voy a hacer:')
        print(listar)

tachira=estado(1,'Táchira','',1,'A')
tachira.agregar_estado()
""" tachira.editar_estado()
tachira.eliminar_estado()
tachira.listar_estado() """

