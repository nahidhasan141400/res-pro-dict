const mongoose = require('mongoose');
const CourseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this course.'],
    maxlength: [150, 'Name cannot be more than 150 characters'],
    unique:true,
  },
  status: {
    type: Boolean,
    required: [true, 'Please specify the status of your course.'],
    default:true
  },
  duration:{
    type: String,
    required: [true, 'Please specify the duration course.'],
  },
  Fee:{
    type: String,
    required: [true, 'Please specify the FEE course.'],
  },
  Instructor:{
    type: mongoose.Schema.ObjectId,
    ref:"Instructor",
    required: [true, 'Please specify the instructor course.'],
  },
  Photo:{
    type: String,
    required: [true, 'Please specify the photo url course.'],
  },
  Details:{
    type: String,
    required: [true, 'Please specify the detailse course.'],
  }
},{ timestamps: true })

module.exports = mongoose.models.Course || mongoose.model('Course', CourseSchema); 