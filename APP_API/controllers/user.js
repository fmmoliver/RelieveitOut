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

//user Update
 const  UserUpdate = function (req,res) {       
        const result = user.findByIdAndUpdate(req.body._id, req.body).setOptions({ overwrite: true, new: true })
        .exec(function (err, userdata){
        if(err){
            res.status(404).json(err);
            return;
        }
        
        console.log(result);
        res.status(200).json(userdata)
        })
        return result

};
//user Update activefalse
//user delete
const UserDelete =async function(req,res){
    console.log(req.body);
    if(req.body.role=="PROFESSIONAL"){
        req.body.activeuser = false;
        const result = user.findByIdAndUpdate(req.body._id, req.body).setOptions({ overwrite: true, new: true })
        .exec(function (err, userdata){
        if(err){
            res.status(404).json(err);
            return;
        }
        
        console.log(result);
        res.status(200).json(userdata)
        })
        return result
    }else{
    const User = await user.findByIdAndDelete(req.body._id);
    if (!User) {
        return res.status(400).json("User not found");
    }
        res.status(200).json("User deleted successfully");
       }
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
    GetUsers,UserUpdate,UserDelete
    
}