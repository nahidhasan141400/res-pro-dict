const mongoose = require('mongoose');
const BatchSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this Bacth.'],
    maxlength: [150, ' batch Name cannot be more than 150 characters'],
    unique:true,
  },
  status: {
    type: Boolean,
    required: [true, 'Please specify the status of your batch.'],
    default:true
  },
  sun:{
    type: String,
    default: "No Class"
  },
  sat:{
    type: String,
    default: "No Class"
  },
  mon:{
    type: String,
    default: "No Class"
  },
  tue:{
    type: String,
    default: "No Class"
  },
  wed:{
    type: String,
    default: "No Class"
  },
  thu:{
    type: String,
    default: "No Class"
  },
  fri:{
    type: String,
    default: "No Class"
  },
},{ timestamps: true })

module.exports = mongoose.models.Batch || mongoose.model('Batch', BatchSchema); 