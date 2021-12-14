const mongoose = require("mongoose");

const coureSchema = new mongoose.Schema({
  label: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
  volumne: {
    type: Number,
  },
  startDate: {
    type: Date,
  },
});

const courseMobel = mongoose.model("Course", coureSchema);

module.exports = courseMobel;
