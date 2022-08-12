var express = require('express');
var app = express();
var router = express.Router();

const ctrlAppointment = require('../controllers/rating')

router.post('/rating', ctrlAppointment.rateRegister);

module.exports = router