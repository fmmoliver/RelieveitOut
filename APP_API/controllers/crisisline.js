const mongoose = require('mongoose');
const crisisline = mongoose.model('crisis');

const getCrisislines = function (req, res) {
    if (req.body) {
        crisisline.find(req.body).exec(function (err, data) {
            if (err) {
                res.status(404).json(err);
                return;
            }
            res.status(200).json(data)
        })
    } else {
        crisisline.find().exec(function (err, data) {
            if (err) {
                res.status(404).json(err);
                return;
            }
            res.status(200).json(data)
        })
    }
};

module.exports = {
    getCrisislines
}