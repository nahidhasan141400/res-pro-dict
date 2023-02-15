const mongoose = require('mongoose');
const BookSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required:true,
  },
  des: { 
    type: String,
    required:true
  },
  
  balance: {
    type: Number,
    required:true,
    default:0,
  },
  user: {
    type: Array,
    required:true,
    default:[]
  },
  status: {
    type: Boolean,
    required:true,
    default:true
  },
 
},{ timestamps: true })

module.exports = mongoose.models.AccBook || mongoose.model('AccBook', BookSchema);