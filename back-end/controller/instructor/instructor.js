const multer = require("multer");
const path = require("path");
const fs = require("fs")
const Instructor = require("../../models/instructor")
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,"./public/photoC/instructor")
    },
    filename: function (req, file, cb) {
        let d = new Date()
      cb(null, `${d.getTime()}-${file.originalname}`)
    }
  });
  


const instructorCon = ()=>{
    return {
        addEnstructor : async (req,res)=>{
            console.log(req.body.name);
            console.log(req.file.filename);
            const {
                name,NID,Specialty,Father,Mother,Mobile,Email,Jdate,Address,Salary
            } = req.body;

            try {
              const dataLoad = new Instructor({
                name,NID,Specialty,Father,Mother,Mobile,Email,Jdate,Address,Salary,
                Photo:req.file.filename

              })
              const resdb = await dataLoad.save();
              res.status(200).send(resdb);              
            } catch (error) {
              console.log(error);
              res.status(500).send(error);
            }

        },
        upload: multer({  
                     storage: storage,
                     limits:{
                      fileSize: 300000 // 300kb 
                     }
                 }),
        getAll: async (req,res)=>{
          try {
            const resdb = await Instructor.find();
            res.status(200).send(resdb);
          } catch (error) {
            console.log(error);
            res.status(500).send(error);
          }
        },
        delete : async (req,res)=>{
           try {
            const _id = req.params.id;
            const datadel = await Instructor.findOne({_id});            
            fs.unlinkSync(path.resolve( __dirname+"/../../public/photoC/instructor/"+datadel.Photo));

            const ac = await Instructor.deleteOne({_id});
                const aData = await Instructor.find({})
                res.status(200).json(aData)
           } catch (error) {
            console.log(error)
            res.status(500).send(error)
           }
        },
        getbyid : async (req,res)=>{
           try {
            const _id = req.params.id;
                const aData = await Instructor.findOne({_id})
                res.status(200).json(aData)
           } catch (error) {
            console.log(error)
            res.status(500).send(error)
           }
        },
        upbyid : async (req,res)=>{
           try {
              const _id = req.body.id;
              const data = req.body.data;
                const aData = await Instructor.findByIdAndUpdate(_id,data)
                res.status(200).json(aData)
           } catch (error) {
            console.log(error)
            res.status(500).send(error)
           }
        }

    }
}

module.exports =  instructorCon;