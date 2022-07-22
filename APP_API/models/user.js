const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    role: { type: String, required: true },
    password: { type: Number },
    activeuser: { type: Boolean, required: true, default: true },
    image: { type: String, required: false },
    email: { type: String, required: true }
});

mongoose.model('user', userSchema, 'user')