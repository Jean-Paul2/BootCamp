const mongoose = require("mongoose");

const participantSchema = new mongoose.Schema({
  prenom: {
    type: String,
    require: true,
  },
  nom: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  ine: {
    type: String,
    require: true,
  },
  num: {
    type: Number,
    require: true,
  },
  courses: [mongoose.Types.ObjectId]
});

const participantModel = mongoose.model("Participant", participantSchema);
module.exports = participantModel;
