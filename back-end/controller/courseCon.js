const Course = require("../models/course");

const coures = ()=>{
    return {
        addCourse: async (req,res)=>{
            const {course} = req.body;
            try {
                const data = new Course({
                    name:course,
                    status:true
                })
                const res = await data.save()
                console.log(res)
            } catch (error) {
                
            }
            res.send({msg:"o9k"})
        }
    }
}

module.exports = coures;