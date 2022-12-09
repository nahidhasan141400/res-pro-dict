const mongoose = require('mongoose');
const sessionSc = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name session.'],
  },
  start : {
    type: String,
    required: [true, 'Please provide a name sesssion.'],
  },
  end: {
    type: String,
    required: [true, 'Please specify the status of your sesssion.'],
  },
  status: {
    type: Boolean,
    required:true
  }
},{ timestamps: true })

module.exports = mongoose.models.Session || mongoose.model('Session', sessionSc);