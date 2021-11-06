const express = require('express');
const router = express.Router();
const joiSchemaValidation = require('../middleware/joiSchemaValidation');
const controller = require('../controller/controller');
const schema = require('../apiSchema/schema');
module.exports = router;

router.post('/register', joiSchemaValidation.validateBody(schema.register),
controller.register,
);
router.post('/login', joiSchemaValidation.validateBody(schema.login),
controller.login)

router.put('/update',joiSchemaValidation.validateBody(schema.update),controller.update)

router.get('/fetch',joiSchemaValidation.validateBody(schema.fetch),controller.fetch)

router.delete('/delete',joiSchemaValidation.validateBody(schema.delete),controller.delete)

router.get('/allusers',controller.allusers)


