var express = require('express');

var router = express.Router();

var controller = require('../controllers/create.controller');

router.get('/', controller.create);
router.post('/', controller.postCreate);

module.exports = router;