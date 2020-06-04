const express = require('express');

let RegistrationsController = require('../controllers/registrations');

let router = express.Router();

router.get('/signup', RegistrationsController.new);

module.exports = router;


