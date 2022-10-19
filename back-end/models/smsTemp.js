const mongoose = require('mongoose');
const Sms_temp_Schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name sms.'],
    maxlength: [100, 'htk cannot be more than 100 characters'],
  },
  text : {
    type: String,
    required: [true, 'Please provide a name sms.'],
    maxlength: [100, 'htk cannot be more than 100 characters'],
  },
  status: {
    type: Boolean,
    required: [true, 'Please specify the status of your sms.'],
  },
},{ timestamps: true })

module.exports = mongoose.models.SMST || mongoose.model('SMST', Sms_temp_Schema);