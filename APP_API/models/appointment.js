const mongoose = require('mongoose');

const appointSchema = new mongoose.Schema({
    doctorName: {type: String, required: true},
    clientName: {type: String, required: true},
    speciality: {type: String, required: true},
    dateTime: {type: Date, required: true},
    city:  {type: String, required: false},
    Price: {type: String, required: false},
    status: {type: String, required: true}
    });
    

    module.exports = mongoose.model('appointSchema', appointSchema)