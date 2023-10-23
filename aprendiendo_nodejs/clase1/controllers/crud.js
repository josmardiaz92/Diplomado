const conexion=require('../database/db');

exports.save=(request,response)=>{
    const identificador=request.body.identificador;
    switch (identificador) {
        case 'continente':
            const nom_con=request.body.nom_con;
            const des_con=request.body.des_con;
            const est_con=request.body.est_con;
            conexion.query('insert into continente set ?',{nom_con:nom_con,des_con:des_con,est_con:est_con},(error,results)=>{
                if(error){
                    console.log(error);
                }else{
                    response.redirect('/continente_listar');
                }
            });
            break;
        case 'pais':
            const nom_pai=request.body.nom_pai;
            const des_pai=request.body.des_pai;
            const ali_pai=request.body.ali_pai;
            const cti_pai=request.body.cti_pai;
            const fky_con=request.body.fky_con;
            const est_pai=request.body.est_pai;
            conexion.query('insert into pais set ?',{nom_pai:nom_pai,des_pai:des_pai,ali_pai:ali_pai,cti_pai:cti_pai,fky_con:fky_con,est_pai:est_pai},(error,results)=>{
                if(error){
                    console.log(error);
                }else{
                    response.redirect('/pais_listar');
                }
            });
            break;
        case 'usuario':
            const user=request.body.user;
            const rol=request.body.rol;
            conexion.query('insert into usuario set ?',{user:user,rol:rol},(error,results)=>{
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