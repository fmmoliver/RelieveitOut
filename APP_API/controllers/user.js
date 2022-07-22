const mongoose = require('mongoose');
const user = mongoose.model('user');

const UserLogin = function (req, res) {
    user.find(req).exec((err, userData) => {
        if (!userData) {
            return res.status(404).json({ "message": "Logged In Successfully  !" })
        } else if (err) {
            return res.status(404).json(err)
        }
        res.status(200).json(userData)
    })
};


const UserRegister = function (req, res) {
    user.create(req.body, (err, userdata) => {
        if (err) {
            res.status(400).json(err);
        } else {
            res.status(201).json(userdata);
        }
    })
};

module.exports = {
    UserLogin,
    UserRegister
}