const conexion=require('../database/db');

exports.save=(request,response)=>{
    const user=request.body.user;
    const rol=request.body.rol;
    conexion.query('insert into usuario set ?',{user:user,rol:rol},(error,results)=>{
        if(error){
            console.log(error);
        }else{
            response.redirect('/');
        }
    })
}
exports.update=(request,response)=>{
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
}
exports.delete=(request,response)=>{
    const id=request.params.id;
    conexion.query('delete from usuario where id=?',[id],(error,results)=>{
        if(error){
            console.log(error);
        }else{
            response.redirect('/');
        }
    })
}