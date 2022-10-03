const mongoose = require('mongoose');
const EntrySchema = new mongoose.Schema({
  name: {
    type: String,
    required:true,
  },
  mobile: { type: String,
    default:"no phone"
  },
  
  company: {
    type: String,
    default:"no company name"
  },
  HTK: {
    type: String,
    default:"no data"
  },
  courses: {
    type: Array,
    default:[]
  },
  decision: {
    type: Array,
    default:[]
  },
  CC: {
    type: String,
    default:"no comments"
  },
  admited: {
    type: Boolean,
    default:false
  },
  year: {
    type: Number,
    default: new Date().getFullYear(),
  },
  month : {
    type: Number,
    default: new Date().getMonth(),
  },
  day : {
    type: Number,
    default: new Date().getDay(),
  },
},{ timestamps: true })

module.exports = mongoose.models.Entry || mongoose.model('Entry', EntrySchema);