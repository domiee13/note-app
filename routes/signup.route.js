var express = require('express');

var controller = require('../controllers/signup.controller');

var router = express.Router();

router.get('/', controller.signup);

router.post('/', controller.postSignup);

module.exports = router;