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
exports.update=(request,response)=>{
    const identificador=request.body.identificador;
    switch (identificador) {
        case 'continente':
            const cod_con=request.body.cod_con;
            const nom_con=request.body.nom_con;
            const des_con=request.body.des_con;
            const est_con=request.body.est_con;
            conexion.query('update continente set ? where cod_con=?',[{nom_con:nom_con,des_con:des_con,est_con:est_con},cod_con],(error,results)=>{
                if(error){
                    console.log(error);
                }else{
                    response.redirect('/continente_listar');
                }
            });
            break;
        case 'pais':
            const cod_pai=request.body.cod_pai;
            const nom_pai=request.body.nom_pai;
            const des_pai=request.body.des_pai;
            const ali_pai=request.body.ali_pai;
            const cti_pai=request.body.cti_pai;
            const fky_con=request.body.fky_con;
            const est_pai=request.body.est_pai;
            conexion.query('update pais set ? where cod_pai=?',[{nom_pai:nom_pai,des_pai:des_pai,ali_pai:ali_pai,cti_pai:cti_pai,fky_con:fky_con,est_pai:est_pai},cod_pai],(error,results)=>{
                if(error){
                    console.log(error);
                }else{
                    response.redirect('/pais_listar');
                }
            });
            break;
        case 'estado':
            const cod_est=request.body.cod_est;
            const nom_est=request.body.nom_est;
            const des_est=request.body.des_est;
            const fky_pai=request.body.fky_pai;
            const est_est=request.body.est_est;
            conexion.query('update estado set ? where cod_est=?',[{nom_est:nom_est,des_est:des_est,fky_pai:fky_pai,est_est:est_est},cod_est],(error,results)=>{
                if(error){
                    console.log(error);
                }else{
                    response.redirect('/estado_listar');
                }
            });
            break;
        case 'ciudad':
            const cod_ciu=request.body.cod_ciu;
            const nom_ciu=request.body.nom_ciu;
            const des_ciu=request.body.des_ciu;
            const fky_est=request.body.fky_est;
            const fky_zon=request.body.fky_zon;
            const est_ciu=request.body.est_ciu;
            conexion.query('update ciudad set ? where cod_ciu=?',[{nom_ciu:nom_ciu,des_ciu:des_ciu,fky_est:fky_est,fky_zon:fky_zon,est_ciu:est_ciu},cod_ciu],(error,results)=>{
                if(error){
                    console.log(error);
                }else{
                    response.redirect('/ciudad_listar');
                }
            });
            break;
        case 'zona_horaria':
            const cod_zon=request.body.cod_zon;
            const nom_zon=request.body.nom_zon;
            const acr_zon=request.body.acr_zon;
            const dif_zon=request.body.dif_zon;
            const est_zon=request.body.est_zon;
            conexion.query('update zona_horaria set ? where cod_zon=?',[{nom_zon:nom_zon,acr_zon:acr_zon,dif_zon:dif_zon,est_zon:est_zon},cod_zon],(error,results)=>{
                if(error){
                    console.log(error);
                }else{
                    response.redirect('/zona_horaria_listar');
                }
            });
            break;
    case 'usuario':
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
}
exports.delete=(request,response)=>{
    const identificador=request.params.ident;
    const id=request.params.id;
    switch (identificador) {
        case 'continente':
            conexion.query('delete from continente where cod_con=?',[id],(error,results)=>{
                if(error){
                    console.log(error);
                }else{
                    response.redirect('/continente_listar');
                }
            })
            break;
        case 'pais':
            conexion.query('delete from pais where cod_pai=?',[id],(error,results)=>{
                if(error){
                    console.log(error);
                }else{
                    response.redirect('/pais_listar');
                }
            })
            break;
        case 'estado':
            conexion.query('delete from estado where cod_est=?',[id],(error,results)=>{
                if(error){
                    console.log(error);
                }else{
                    response.redirect('/estado_listar');
                }
            })
            break;
        case 'ciudad':
            conexion.query('delete from ciudad where cod_ciu=?',[id],(error,results)=>{
                if(error){
                    console.log(error);
                }else{
                    response.redirect('/ciudad_listar');
                }
            })
            break;
        case 'zona_horaria':
            conexion.query('delete from zona_horaria where cod_zon=?',[id],(error,results)=>{
                if(error){
                    console.log(error);
                }else{
                    response.redirect('/zona_horaria_listar');
                }
            })
            break;
        case 'usuario':
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
}
