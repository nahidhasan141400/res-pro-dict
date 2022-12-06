const mongoose = require('mongoose');
const StudentSchema = new mongoose.Schema({
  name: {
    type:String,
    require:true,
  },
  phone: {
    type:String,
    require:true,
    unique:true
  },
  regNo:{
    type:String,
    require:true,
  },
  barth_date:{
    type: String,
  },
  father_name:{
    type:String
  },
  mother_name:{
    type:String
  },
  g_number:{
    type:String
  },
  present_address:{
    type:String
  },
  parmanent_address:{
    type:String
  },
  education_qualification:{
    type:String
  },
  profession:{
    type:String
  },
  gender:{
    type:String
  },
  religion:{
    type:String
  },
  blood_grouup:{
    type:String
  },
  roll_no:{
    type:String
  },
  admission_date:{
    type:String
  },
  admission_year:{
    type:String
  },
  money_recip_no:{
    type:Array
  },
  attendance:{
    type:Array
  },
  course:{
    type:Object,
    require:true
  },
  discount:{
    type:String 
  },
  session:{
    type:String
  },
  batch:{
    type:String
  }



},{ timestamps: true })

module.exports = mongoose.models.Student || mongoose.model('Student', StudentSchema);