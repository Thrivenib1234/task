const service = require('../service/service');
const constants = require('../constants');

var globalRes;


module.exports.register =  async (req,res) => {
    globalRes = res;
    try {
        await service.register(req.body,registerresponse);
    }catch(error){
        console.log('Something went wrong: Controller : register',error); 
    }
}

function registerresponse(err, result,type) {
    let response = {...constants.defaultServerResponse};
    try {
            if(err){
                response.message = err.message;
            }else {
                const responseFromService =  result;
                if(type==1){
                    response.status = 200;
                    response.message = constants.REGISTER.ADD;
                }else{
                    response.status = 203;
                    response.message = constants.REGISTER.ALREADY;
                }
                response.body = responseFromService;
            }
     }catch(error){
        console.log('Something went wrong: Controller : register',error);
        response.message = error.message; 
     }
     return globalRes.status(response.status).send(response);
}

module.exports.login =  async (req,res) => {
    globalRes = res;
    try {
        await service.login(req.body,loginresponse);
    }catch(error){
        console.log('Something went wrong: Controller : login',error); 
    }
}

function loginresponse(err, result,type) {
    let response = {...constants.defaultServerResponse};
    try {
            if(err){
                response.message = err.message;
            }else {
                const responseFromService =  result;
                if(type==1){
                    response.status = 203;
                    response.message = constants.LOGIN.INVALID;
                }else{
                    response.status = 200;
                    response.message = constants.LOGIN.LOGUSER;
                }
        
                    response.body = responseFromService;
            }
     }catch(error){
        console.log('Something went wrong: Controller : login',error);
        response.message = error.message; 
     }
     return globalRes.status(response.status).send(response);
}

module.exports.update =  async (req,res) => {
    globalRes = res;
    try {
        await service.update(req.body,updateresponse);
    }catch(error){
        console.log('Something went wrong: Controller : update',error); 
    }
}

function updateresponse(err, result,type) {
    let response = {...constants.defaultServerResponse};
    try {
            if(err){
                response.message = err.message;
            }else {
                const responseFromService =  result;
                response.status = 200;
                response.message = constants.UPDATE.UPUSER;
                response.body = responseFromService;
            }
     }catch(error){
        console.log('Something went wrong: Controller : update',error);
        response.message = error.message; 
     }
     return globalRes.status(response.status).send(response);
}

module.exports.fetch =  async (req,res) => {
    globalRes = res;
    try {
        await service.fetch(req.body,fetchresponse);
    }catch(error){
        console.log('Something went wrong: Controller : fetch',error); 
    }
}

function fetchresponse(err, result,type) {
    let response = {...constants.defaultServerResponse};
    try {
            if(err){
                response.message = err.message;
            }else {
                const responseFromService =  result;
                response.status = 200;
                response.message = constants.FETCH.FETUSER;
                response.body = responseFromService;
            }
     }catch(error){
        console.log('Something went wrong: Controller : fetch',error);
        response.message = error.message; 
     }
     return globalRes.status(response.status).send(response);
}


module.exports.delete =  async (req,res) => {
    globalRes = res;
    try {
        await service.delete(req.body,deleteresponse);
    }catch(error){
        console.log('Something went wrong: Controller : delete',error); 
    }
}

function deleteresponse(err, result,type) {
    let response = {...constants.defaultServerResponse};
    try {
            if(err){
                response.message = err.message;
            }else {
                const responseFromService =  result;
                response.status = 200;
                response.message = constants.DELETE.DELUSER;
                response.body = responseFromService;
            }
     }catch(error){
        console.log('Something went wrong: Controller : delete',error);
        response.message = error.message; 
     }
     return globalRes.status(response.status).send(response);
}

module.exports.allusers =  async (req,res) => {
    globalRes = res;
    try {
        await service.allusers(req.body,allusersresponse);
    }catch(error){
        console.log('Something went wrong: Controller : allusers',error); 
    }
}

function allusersresponse(err, result,type) {
    let response = {...constants.defaultServerResponse};
    try {
            if(err){
                response.message = err.message;
            }else {
                const responseFromService =  result;
                response.status = 200;
                response.message = constants.ALLUSERS.FETCH;
                response.body = responseFromService;
            }
     }catch(error){
        console.log('Something went wrong: Controller : allusers',error);
        response.message = error.message; 
     }
     return globalRes.status(response.status).send(response);
}





