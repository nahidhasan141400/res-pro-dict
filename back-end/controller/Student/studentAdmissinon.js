const Student = require("../../models/student");
const Course = require("../../models/course");
const {ObjectId } = require("mongodb");


function StudentAdmissionCon(){
    return{
        Add:async (req,res)=>{
            try {
                const dbnom = await Student.find().sort({_id:-1}).limit(1);
                // console.log(dbnom)
                const reg = dbnom.length < 1 ? 0 : +dbnom[0].regNo;
                const roll = dbnom.length < 1 ? 0 : +dbnom[0].roll_no;
                const course = await Course.find();
                const formData = req.body;
                
                if(typeof(formData.name) === "string"){
                   const fildata = course.filter((e)=>{
                        return ObjectId(e._id).toString() === formData.course
                    })
                    const load =new Student({
                        name: formData.name,
                        phone: formData.phone,
                        course: fildata[0],
                        regNo:reg  + 1,
                        roll_no: roll + 1,
                        admission_date: new Date().toISOString(),
                        admission_year: new Date().getFullYear()
                    })
                    const response = await load.save();
                    return res.redirect("/studentadmitionquick")
                }
                else {
                        const loaddata = formData.name.map((e,i)=>{
                            const fildata = course.filter((e)=>{
                                return ObjectId(e._id).toString() === formData.course[i]
                            })
                            return{
                                name: e,
                                phone: formData.phone[i],
                                course: fildata[0],
                                regNo:(reg + 1) + i ,
                                roll_no:(roll + 1 ) + i,
                                admission_date: new Date().toISOString(),
                                admission_year: new Date().getFullYear()
                            }
                    })

                    const response = await Student.insertMany(loaddata) 
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