
const Entry = require("../models/entry");

const entry = () => {
    return {
        addEntry: async (req, res) => {
            const { name,
                mobile,
                company,
                HTK,
                decision,
                cc,
                nextd,
                course1,
                course2,
                course3 } = req.body;
            let course = []

            if (name === "" || !name) {
                return res.status(400).json({ msg: "input name!" })
            }
            if (HTK === "" || !HTK) {
                return res.status(400).json({ msg: "HTK name!" })
            }
            if ((course1 === "" || !course1) && (course2 === "" || !course2) && (course3 === "" || !course3)) {
                return res.status(400).json({ msg: "input a course!" })
            }

            if (course1 !== "" || !course1) {
                course.push(course1);
            }
            if (course2 !== "" || !course2) {
                course.push(course2);
            }
            if (course3 !== "" || !course3) {
                course.push(course3);
            }

            try {
                const CC = cc;
                const nextCD = nextd;
                const courses = course;
                const canon =  new Entry({
                    name,
                    mobile,
                    company,
                    HTK,
                    courses,
                    decision,
                    CC,
                    nextCD,
                })
                const resDB = await canon.save();
                return res.status(200).send("ok")
            } catch (error) {
                console.log(error)
                return res.status(500).json(error)
            }

        }
        ,
        month:async (req,res)=>{
            const year = new Date().getFullYear();
            const month = new Date().getMonth();
            try {
                let datadb =await Entry.find({year,month});
                res.status(200).json(datadb)
            } catch (error) {
                console.log(error)
                res.status(500).send(error)
            }
        }
    }
}

module.exports = entry;