const mongoose = require('mongoose');
const appointment = mongoose.model('appointSchema');

//create appointment 
const createappointmnent = function (req, res) {
    appointment.create(req.body, (err, data) => {
        if (err) {
            res.status(400).json(err);
        } else {
            res.status(201).json(data);
        }
    })
};

module.exports = {
    createappointmnent
}
