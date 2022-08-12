const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
  doctorName: {type: String, required: true},
  clientName: {type: String, required: true},
  dateTime: {type: Date, required: true},
  rating: {type: String, required: true}
});
    
mongoose.model('rating', ratingSchema, 'rating')