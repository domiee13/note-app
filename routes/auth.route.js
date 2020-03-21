var express = require('express');
var router = express.Router();

var controller = require('../controllers/auth.controller');

router.get('/', controller.login);

router.post('/', controller.postLogin);

module.exports = router;