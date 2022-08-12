const mongoose = require('mongoose');
const rating = mongoose.model('rating');


//insert session evaluation
const rateRegister = function (req, res) {
  /*rating.create(req.body, (err, userdata) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(201).json(userdata);
    }
  })*/
}

module.exports = {
  rateRegister
}

