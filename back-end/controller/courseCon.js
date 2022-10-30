const multer = require("multer");
const path = require("path")
const fs = require('fs');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,"./public/photoC/Course")
    },
    filename: function (req, file, cb) {
        let d = new Date()
      cb(null, `${d.getTime()}-${file.originalname}`)
    }
  });



const Course = require("../models/course");

const coures = ()=>{
    return {
        addCourse: async (req,res)=>{
            const {name,duration,Fee,Instructor,Details} = req.body;
            try {
                const data = new Course({
                    name,duration,Fee,Instructor,Details,Photo:req.file.filename
                })
                const resdata = await data.save()
              return  res.status(200).json(resdata);
            } catch (error) {
                console.log(error)
                return   res.status(500).send(error)
            }
        },
        upload: multer({  
            storage: storage,
            limits:{
             fileSize: 3000000 // 3mb
            }
        }),
        getallcourse : async (req,res)=>{
            try {
                const allcourse = await Course.find({});
                res.send(allcourse)
            } catch (error) {
                res.status(500).send(error)
            }
        },
        delete: async(req,res)=>{
            try {


                const _id = req.params.id;
                const datadel = await Course.findOne({_id});
                fs.unlinkSync(path.resolve( __dirname+"/../public/photoC/Course/"+datadel.Photo));
                const ac = await Course.deleteOne({_id});
                const aData = await Course.find({})
                res.status(200).json(aData)
            } catch (error) {
                res.status(500).send(error)
            }
        },
        CStatus: async (req,res)=>{
            try {
                const _id = req.params.id;
                const status = !(req.body.status);
                await Course.findByIdAndUpdate(_id,{status:status});
                const data = await Course.find({});
                return res.status(200).json(data);
                
            } catch (error) {
                console.log(error);
                return res.status(500).send(error)
            }
        },
        getActiveCourse:async (req,res)=>{
            try {
                const resDb = await Course.find({status:true}).populate("Instructor").sort({ name: 1} );
                res.json(resDb);
            } catch (error) {
                console.log(error);
                res.status(500).send({msg:error})
            }
        },
        getbyid:async (req,res)=>{
            try {
                const _id = req.params.id;
                const resDb = await Course.findOne({_id}).populate("Instructor");
                res.json(resDb);
            } catch (error) {
                console.log(error);
                res.status(500).send({msg:error})
            }
        },
        updateC:async (req,res)=>{
            try {
                const _id = req.body.id;
                const data = req.body.data;
                const resDb = await Course.findByIdAndUpdate(_id,data)
                res.json(resDb);
            } catch (error) {
                console.log(error);
                res.status(500).send({msg:error})
            }
        },
    }
}

module.exports = coures;