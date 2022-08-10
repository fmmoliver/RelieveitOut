var express = require('express');
var app = express();
var router = express.Router();

const ctrlUser = require('../controllers/user')

router.post('/login', ctrlUser.UserLogin);
router.post('/register', ctrlUser.UserRegister);
router.post('/users', ctrlUser.GetUsers);
router.post('/update', ctrlUser.UserUpdate);
router.post('/delete', ctrlUser.UserDelete);

module.exports = router