const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const departementSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  }
}, {
  timestamps: true,
});

const Departement = mongoose.model('Departement', departementSchema);

module.exports = Departement;