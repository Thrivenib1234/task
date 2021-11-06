const express = require('express');
const dotEnv = require('dotenv');
const cors = require('cors');


 var PORT=3002


dotEnv.config();
const app = express();

app.use(cors()); // enable for using from other domain
app.use(express.json()); // help to parse content Type : "application/json"
app.use(express.urlencoded({extended: true})); // help to parse content Type : "application/x-www-form-urlencoded"
// ////// END MIDDLEWARE ///////




////// BEGIN ROUTES //////////

 app.use('/users',require('./routes/routes'));

app.get('/',(req,res,next) =>{
    res.send('Hello from the server ')
 });
 //////// END ROUTES /////////

 /////// START SERVER////////
 app.listen(PORT,() => {
    console.log('server listening on port '+PORT);
 });
 
 //error handling middleware
 app.use(function (err, req, res, next) {
     console.error(err.stack)
     res.status(500).send({
       status: 500,
       message: err.message,
       body: {}
     });
   })
