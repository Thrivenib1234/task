const constants = require('../constants');
var nodemailer = require('nodemailer');
var jwt=require('jsonwebtoken')

const {
    Pool
  } = require("pg");
  

var config = {
    user: "",
    database:"",
    password:"",
    host:"",
    port: 5432,
    max: 20,
    idleTimeOutMillis: 5000000,
  };
  const pool = new Pool(config);
  
  if (!pool) {
  
    console.log("Data base not connect")
  }
  else {
  
    console.log("database connected")
  }
  
  pool.on("error", function (err, client) {
    console.error("Unexpected error on idle client", err.message, err.stack);
  });
module.exports.register = async({username,password,email,address,mobile},callback) => {
    try{
     var duplicate="select * from user_login where email='"+email+"'"
       await pool.query(duplicate,async function (er, rs, fields){
           if(er){
            callback(new Error(err),null,null);
           }else{
               if(rs.rows.length==0){
                var register = "insert into user_login(username,password,email,address,mobile)values('"+username+"','"+password+"','"+email+"','"+address+"','"+mobile+"')";
                await  pool.query(register, async function (err, result, fields) {
                    if (err){
                        console.log("Query  is not executed");
                        callback(new Error(err),null,null);
                    }
                    else {
                       callback(null,{},1);    
                    }
                });
               }else{
                callback(null,{});
               }
           }

       })

    }catch(error){
        console.log('Something went wrong: Service: register',error);
        //throw new Error(error);
        callback(new Error(error),null,null);
    }

}

module.exports.login = async ({email,password},callback) => {
    try{
        var login = "select * from user_login where email='"+email+"' and password='"+password+"'"
        await    pool.query(login, async function (err, result, fields) {
               if (err){
                   console.log("Query  is not executed");
                   callback(new Error(err),null,null);
               } else {
                   if(result.rows.length === 0){
                       callback(null,{},1); 
                   }else{
   
                       callback(null,{}); 
                   }
                }
           });

    }catch(error){
        console.log('Something went wrong: Service: login',error);
        //throw new Error(error);
        callback(new Error(error),null,null);
    }

}

module.exports.update =  async ({username,password,email,address,mobile,user_id},callback) => {
    try{
        var  update = "update user_login set username='"+username+"',password='"+password+"',email='"+email+"',address='"+address+"',mobile='"+mobile+"'  where user_id="+user_id+" "
    await  pool.query(update, async function (err, result, fields) {
             if (err){
                 console.log("Query  is not executed");
                     callback(new Error(err),null,null);
             }else {
                  callback(null,{});    
             }
         });
    }catch(error){
        console.log('Something went wrong: Service: update',error);
        //throw new Error(error);
        callback(new Error(error),null,null);
    }

}

module.exports.delete =  async ({user_id},callback) => {
    try{
        var del = "delete from user_login where user_id="+user_id+""
        await  pool.query(del, async function (err, result, fields) {
              if (err){
                  console.log("Query  is not executed");
                  callback(new Error(err),null,null);
              }else {
                  callback(null,{});    
              }
          });
    }catch(error){
        console.log('Something went wrong: Service: delete',error);
        //throw new Error(error);
        callback(new Error(error),null,null);
    }


}

module.exports.fetch =  async ({user_id},callback) => {
    try{
        var fetch = "select * from user_login where user_id="+user_id+""
        await pool.query(fetch, async function (err, result,fields) {
            if (err){
               console.log("Query  is not executed");
                 callback(new Error(err),null,null);
            } else {
                callback(null,result.rows);
        
            }
        });

    }catch(error){
        console.log('Something went wrong: Service: fetch',error);
        //throw new Error(error);
        callback(new Error(error),null,null);
    }

}

module.exports.allusers =  async ({user_id},callback) => {
    try{
        var alluser = "select * from user_login"
        await pool.query(alluser, async function (err, result,fields) {
            if (err){
               console.log("Query  is not executed");
                 callback(new Error(err),null,null);
            } else {
                callback(null,result.rows);
        
            }
        });
    }catch(error){
        console.log('Something went wrong: Service: allusers',error);
        //throw new Error(error);
        callback(new Error(error),null,null);
    }

}
