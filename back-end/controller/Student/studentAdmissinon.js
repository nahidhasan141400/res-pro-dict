const Student = require("../../models/student");
const Course = require("../../models/course");
const {ObjectId } = require("mongodb");


function StudentAdmissionCon(){
    return{
        Add:async (req,res)=>{
            try {
                const course = await Course.find();
                const formData = req.body;
                
                if(typeof(formData.name) === "string"){
                   const fildata = course.filter((e)=>{
                        return ObjectId(e._id).toString() === formData.course
                    })
                    const load =new Student({
                        name: formData.name,
                        phone: formData.phone,
                        course: fildata[0]
                    })
                    const response = await load.save();
                    return res.redirect("/studentadmitionquick")
                }
            } catch (error) {
                console.log(error)
                res.status(500).send(error);
            }
        }
    }
}

module.exports = StudentAdmissionCon;