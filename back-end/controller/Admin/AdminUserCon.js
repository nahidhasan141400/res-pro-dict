const multer = require("multer");
const path = require("path");
const fs = require("fs");
const ncrip = require("ncrip");

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
              try {
                const ar = ["start"]
                const {name,user,phone,email,password} = req.body;
                const copy = new Admin({
                  name,username:user,email,phone,
                  password: ncrip.enc(password,process.env.KEY),
                  photo: req.file?req.file.filename:"nophoto.png",
                  acsses:ar
                });
                const resdb = await copy.save();
                res.status(200).send(resdb);
              } catch (error) {
                console.log(error);
                res.status(500).send(error)
              }
        },
        upload: multer({  
                     storage: storage,
                     limits:{
                      fileSize: 820000 // 300kb 
                     }
                 }),
        allAmin: async (req,res)=>{
              try {
                const resdb = await Admin.find();
                res.status(200).send(resdb);
              } catch (error) {
                console.log(error);
                res.status(500).send(error);
              }
        }

    }
}

module.exports =  AminUserCon;

