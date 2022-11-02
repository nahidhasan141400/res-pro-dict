const multer = require("multer");
const path = require("path");
const fs = require("fs")

const Admin = require("../../models/admin");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,"./public/photoC/Admins")
    },
    filename: function (req, file, cb) {
        let d = new Date()
      cb(null, `${d.getTime()}-${file.originalname}`)
    }
  });
  


const AminUserCon = ()=>{
    return {
        addEnstructor : async (req,res)=>{

        },
        upload: multer({  
                     storage: storage,
                     limits:{
                      fileSize: 320000 // 300kb 
                     }
                 }),

    }
}

module.exports =  AminUserCon;