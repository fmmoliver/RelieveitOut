var express = require('express');
var app = express();
var router = express.Router();

const ctrlCrisisline = require('../controllers/crisisline')

router.post('/crisislines', ctrlCrisisline.getCrisislines);


module.exports = router