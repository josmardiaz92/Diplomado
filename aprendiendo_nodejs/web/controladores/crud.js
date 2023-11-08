const conexion=require('../bd/bd');
let query='';

exports.save=(req, res) => {
    // Recibe los datos enviados en el cuerpo de la solicitud POST
    const data = req.body;
    // Puedes acceder a los campos específicos en data
    const identificador = data.identificador;

    switch (identificador) {
        case 'continente':
            const nom_con=data.nom_con;
            const des_con=data.des_con;
            const est_con=data.est_con;
            values=[];
            query = `select ubicacion.continente_agregar('${nom_con}','${des_con}','${est_con}')`;
            break;
        case 'pais':
            const nom_pai = data.nom_pai;
            const des_pai = data.des_pai;
            const ali_pai = data.ali_pai;
            const cti_pai = data.cti_pai;
            const fky_con = data.fky_con;
            const est_pai = data.est_pai;
            query = `SELECT ubicacion.pais_agregar('${nom_pai}','${des_pai}','${ali_pai}','${cti_pai}',${fky_con},'${est_pai}')`;
            break;
        case 'estado':
            const nom_est=data.nom_est;
            const des_est=data.des_est;
            const fky_pai=data.fky_pai;
            const est_est=data.est_est;
            query=`select ubicacion.estado_agregar('${nom_est}','${des_est}',${fky_pai},'${est_est}')`
            break;
        case 'ciudad':
            const nom_ciu=data.nom_ciu;
            const des_ciu=data.des_ciu;
            const fky_est=data.fky_est;
            const fky_zon=data.fky_zon;
            const est_ciu=data.est_ciu;
            query=`select ubicacion.ciudad_agregar('${nom_ciu}','${des_ciu}',${fky_est},${fky_zon},'${est_ciu}')`
            break;
        case 'zona_horaria':
            const nom_zon=data.nom_zon;
            const acr_zon=data.acr_zon;
            const dif_zon=data.dif_zon;
            const est_zon=data.est_zon;
            query=`select ubicacion.zona_horaria_agregar('${nom_zon}','${acr_zon}',${dif_zon},'${est_zon}')`
            break;
        default:
            query='';
            console.log('no hay identificador');
            break;
    }
    if(query!=''){
        conexion.query(query, (error,response)=>{
            if(error){
                console.log(error);
            }else{
                console.log('Datos insertados correctamente');
                // Después de guardar los datos con éxito, redirige a otra página
                res.json({ message: "Datos guardados correctamente" });
            }
        });
    }else{
        console.log('Invalido');
    }
    
}
exports.update=(req, res)=>{
    const data = req.body;
    const identificador = data.identificador;
    switch (identificador) {
        case 'continente':
            const cod_con=data.cod_con;
            const nom_con=data.nom_con;
            const des_con=data.des_con;
            const est_con=data.est_con;
            query = `select ubicacion.continente_modificar(${cod_con},'${nom_con}','${des_con}','${est_con}')`;
            break;
        const id=request.body.id;
        const user=request.body.user;
        const rol=request.body.rol;
        conexion.query('update usuario set ? where id=?',[{user:user,rol:rol},id],(error,results)=>{
            if(error){
                console.log(error);
            }else{
                response.redirect('/');
            }
        })
            break;
        default:
            console.log('no hay identificador');
            break;
    }
    if(query!=''){
        conexion.query(query, (error,response)=>{
            if(error){
                console.log(error);
            }else{
                console.log('Datos insertados correctamente');
                res.json({ message: "Datos guardados correctamente" });
            }
        });
    }else{
        console.log('Invalido');
    }
}
exports.delete=(req, res)=>{
    const data = req.body;
    const identificador = data.identificador;

    switch (identificador) {
        case 'continente':
            query=`select ubicacion.continente_eliminar(${data.cod_con})`;
            break;
            conexion.query('delete from usuario where id=?',[id],(error,results)=>{
                if(error){
                    console.log(error);
                }else{
                    response.redirect('/');
                }
            });
            break;
        default:
            console.log('no hay identificador');
            break;
    }
    if(query!=''){
        conexion.query(query, (error,response)=>{
            if(error){
                console.log(error);
            }else{
                console.log('Datos insertados correctamente');
                res.json({ message: "Datos guardados correctamente" });
            }
        });
    }else{
        console.log('Invalido');
    }
}
