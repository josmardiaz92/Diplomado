
#TODO Objetivo 1: Definir calses
class pais:
    #TODO Objetivo 1: Crear constructores
    def __init__(self,cod_pai,nom_pai,des_pai,ali_pai,cti_pai,fky_con,est_pai):
        self.cod_pai=cod_pai
        self.nom_pai=nom_pai
        self.des_pai=des_pai
        self.ali_pai=ali_pai
        self.cti_pai=cti_pai
        self.fky_con=fky_con
        self.est_pai=est_pai
    def agregar_pais(self):
        agregar=f"""INSERT INTO ubicacion.pais 
            (nom_pai,des_pai,ali_pai,cti_pai,fky_pai,est_pai) 
            VALUES
            ('{self.nom_pai}','{self.des_pai}','{self.ali_pai}','{self.cti_pai}',{self.fky_con},'{self.est_pai}');"""
        print('Voy a hacer lo siguiente:')
        print(agregar)
    def editar_pais(self):
        editar=f"""UPDATE ubicacion.pais
                    SET 
                    nom_pai='{self.nom_pai}', des_pai='{self.des_pai}', ali_pai='{self.ali_pai}', cti_pai='{self.cti_pai}', fky_con={self.fky_con}, est_pai='{self.est_pai}'
                    WHERE
                    cod_pai={self.cod_pai};
                    """
        print('Voy a hacer lo siguiente:')
        print(editar)
    def eliminar_pais(self):
        eliminar=f"""DELETE FROM ubicacion.pais WHERE cod_pai={self.cod_pai};"""
        print('Voy a hacer lo siguiente:')
        print(eliminar)
    def desactivar_pais(self):
        desactivar=f"""UPDATE ubicacion.pais SET est_pai='I' WHERE cod_pai={self.cod_pai};"""
        print('Voy a hacer lo siguiente:')
        print(desactivar)

#TODO Objetivo 1: Instanciar objetos

venezuela=pais(1,'República Bolivariana de Venezuela','República ubicada en SudAmérica con mas 30.000.000 de habitantes','Vzla','+58',1,'A')
#*Asi se usan los metodos(funciones) de la clase
venezuela.agregar_pais()
venezuela.nom_pai='Venezuela'
venezuela.des_pai='V'
venezuela.ali_pai='Vzla'
venezuela.cti_pai='58'
venezuela.fky_con=2
venezuela.est_pai='I'
venezuela.editar_pais() 
venezuela.eliminar_pais()
venezuela.desactivar_pais()

