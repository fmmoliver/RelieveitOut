const mongoose = require('mongoose');
const user = mongoose.model('user');


const UserLogin = function (req, res) {
    console.log(req.body, 'req.body')
    user.find(req.body).exec((err, userData) => {
        if (!userData) {
            return res.status(404).json({ "message": "Logged In Successfully  !" })
        } else if (err) {
            return res.status(404).json(err)
        }
        res.status(200).json(userData[0])
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

const GetUsers = function (req, res) {
   if(req.body){
    user.find(req.body).exec(function (err, userdata) {
        if(err){
            res.status(404).json(err);
            return;
        }
        res.status(200).json(userdata)
    })
   }
   else{
    user.find().exec(function (err, userdata) {
        if(err){
            res.status(404).json(err);
            return;
        }
        res.status(200).json(userdata)
    })

   }
    
};



// get doctors data
// const doctordisplay = function (req, res) {
//     doctor.find().exec(function (err, data) {
//         if(err){
//             res.status(404).json(err);
//             return;
//         }
//         res.status(200).json(data)
//     })
// };



module.exports = {
    UserLogin,
    UserRegister,
    GetUsers,
    
}