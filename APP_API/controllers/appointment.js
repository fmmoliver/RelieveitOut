const mongoose = require('mongoose');
const appointment = mongoose.model('appointment');

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

//get Appointment
const getAppointments = function (req, res) {
  if(req.body){
    appointment.find(req.body).exec(function (err, data) {
      if(err){
        res.status(404).json(err);
        return;
      }
      res.status(200).json(data)
    })
  } else{
    appointment.find().exec(function (err, data) {
      if(err){
        res.status(404).json(err);
        return;
      }
      res.status(200).json(data)
    })
  }
};

module.exports = {
    createappointmnent,
    getAppointments
}

