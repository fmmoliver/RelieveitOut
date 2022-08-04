const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    role: { type: String, required: true },
    password: { type: String },
    activeuser: { type: Boolean, required: true, default: true },
    image: { type: String, required: false },
    email: { type: String, required: true },
    speciality: {type: String, required: false},
    city:  {type: String, required: false},
    Price: {type: String, required: false},
    rating: {type: String, required: false},
    session_duration:{type: String, required: false}
});




mongoose.model('user', userSchema, 'user')
