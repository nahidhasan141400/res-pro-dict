const mongoose = require('mongoose');
const InstructorSchema = new mongoose.Schema({
  name: {
    type: String,
    required:true,
  },
  Specialty: {
    type: String,
    require:true
  },
  NID: {
    type: String,
    required:true
  },
  Father: {
    type: String,
    required:true
  },
  Mother: {
    type: String,
    required:true
  },
  Mobile: {
    type: String,
    required:true
  },
  Email: {
    type: String,
    required:true
  },
  Jdate: {
    type: String,
    required:true
  },
  Salary: {
    type: String,
    required:true
  },
  Address: {
    type: String,
    required:true
  },
  Photo: {
    type: String,
    required:true
  },
},{ timestamps: true })

module.exports = mongoose.models.Instructor || mongoose.model('Instructor', InstructorSchema);