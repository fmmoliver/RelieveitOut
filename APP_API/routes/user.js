var express = require('express');
var router = express.Router();

const ctrlUser = require('../controllers/user')

router.post('/login', ctrlUser.UserLogin);
router.post('/register', ctrlUser.UserRegister);
router.get('/users', ctrlUser.GetUsers);

module.exports = router