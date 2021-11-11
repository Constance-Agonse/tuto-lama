const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PinSchema = new Schema({
  username: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  rating: {
    type: Number,
    require: true,
    min: 0,
    max: 5
  },
  lat: {
    type: Number, 
    require: true,
  },
  long: {
    type: Number, 
    require: true,
  },
  description: {
    type: String,
  }

});

module.exports = mongoose.model("Pin", PinSchema);