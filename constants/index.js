module.exports = {
    defaultServerResponse : {
        status : 205,
        message : '',
        body : {}
    },
    requestValidationMessage: {
        BAD_REQUEST: 'Invalid fields'
    },
    
    REGISTER:{
        ADD:'Register successfully',
        ALREADY:"Email is already register please login.."
    },

    LOGIN:{
        LOGUSER:"Login  successfully",
        INVALID:"Invalid email/password please check..."
    },
    UPDATE:{
        UPUSER:"Update your data successfully"
    },
    FETCH:{
        FETUSER:"Fetch your data  successfully"
    },
    DELETE:{
        DELUSER:"Delete your data successfully"
    },
    ALLUSERS:{
        FETCH:'Fetch all users successfully',
  
    }
}