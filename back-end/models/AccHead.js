const mongoose = require('mongoose');
const ACCheadSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required:true,
  },
 balance: {
    type: Number,
    required:true,
    default:0,
  },
  status: {
    type: Boolean,
    required:true,
    default:true
  },
  IOS:{
    type:Boolean,
    required:true,
  }
},{ timestamps: true })

module.exports = mongoose.models.AccHead || mongoose.model('AccHead', ACCheadSchema);