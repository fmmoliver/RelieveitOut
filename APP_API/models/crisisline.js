const mongoose = require('mongoose');

const crisisSchema = new mongoose.Schema({
    meetingroomname: { type: String, required: true },
    roomtype: { type: String, required: true },
});


mongoose.model('crisis', crisisSchema, 'crisislines')