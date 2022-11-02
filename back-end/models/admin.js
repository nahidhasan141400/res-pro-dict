const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for Admin.'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  username: {
    /* The user name of your Admin */

    type: String,
    required: [true, 'Please specify the username of your admin.'],
    maxlength: [40, 'user name cannot be more than 40 characters'],
  },
  phone: {
    /* The user name of your Admin */

    type: String,
    required: [true, 'Please specify the Phone number of your admin.'],
    maxlength: [15, 'user name cannot be more than 15 characters'],
    unique: true,
  },
  email: {
    /* The user name of your Admin */
    type: String,
    required: [true, 'Please specify the Phone Email of your admin.'],
    maxlength: [50, 'user name cannot be more than 50 characters'],
    unique: true,
  },
  photo: {
    /* The user name of your Admin */
    type: String,
    unique: true,
    default:"nophoto.png"
  },
  acsses: {
    /* The user name of your Admin */
    type: Array,
    unique: true,
  },
  acsses: {
    /* The user name of your Admin */
    type: Array,
    unique: true,
  },
  dict:{
    type: Boolean,
    default: false
  },
  password:{
     /* The password of your Admin */

     type: String,
     required: [true, 'Please specify the password of your admin.'],
     maxlength: [40, 'password cannot be more than 40 characters'],
  }
})

module.exports = mongoose.models.Admin || mongoose.model('Admin', AdminSchema);