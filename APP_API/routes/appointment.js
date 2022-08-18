var express = require('express');
var app = express();
var router = express.Router();

const ctrlAppointment = require('../controllers/appointment')

router.post('/appointments', ctrlAppointment.getAppointments);
router.post('/createnewappointment', ctrlAppointment.createappointmnent);


module.exports = router