
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
        },
        getAppointment:async (req,res)=>{
            
            try {
               const t = new Date();
               let month , date ;
               if(t.getDate() < 10){
                date = `0${t.getDate()}`
               }else{
                date = t.getDate()
               }
               if((t.getMonth()+1) < 10){
                month = `0${t.getMonth()+1}`
               }else{
                month = t.getMonth()+1
               }
                const datetoday = `${t.getFullYear()}-${month}-${date}`;
                const resdb = await Entry.find({nextCD:datetoday});
                res.status(200).send(resdb);
            } catch (error) {
                console.log(error)
                res.status(500).send(error)
            }
        },
        getByID: async (req,res) => {
                try {
                    const _id = req.params.id;
                    const datadb =await  Entry.findOne({_id})
                    res.status(200).json(datadb)
                } catch (error) {
                    console.log(error)
                    res.status(500).send(error)
                }
        },
        changeStatus : async (req,res)=>{
            try {
                const _id = req.params.id;
                const {status} = req.body;
                const resdb = await Entry.findByIdAndUpdate(_id,{admited:!status})
                const datats = await Entry.findOne({_id})
                res.status(200).json(datats)
            } catch (error) {
                console.log(error);
                res.status(500).send(error)
            }
        },
        changeNextCD: async (req,res)=>{
            try {
                const {_id,date} = req.body;
                const resdb = await Entry.findByIdAndUpdate(_id,{nextCD:date});
                const t = new Date();
                let month , date2 ;
                if(t.getDate() < 10){
                 date2 = `0${t.getDate()}`
                }else{
                 date2 = t.getDate()
                }
                if((t.getMonth()+1) < 10){
                 month = `0${t.getMonth()+1}`
                }else{
                 month = t.getMonth()+1
                }
                 const datetoday = `${t.getFullYear()}-${month}-${date2}`;
                 const ds = await Entry.find({nextCD:datetoday});
                 res.status(200).send(ds);
            } catch (error) {
                console.log(error);
                res.status(500).send(error)
            }
        },
        getmonthdataan: async (req,res)=>{
                try {
                    const {date} = req.body;
                    let d = new Date(date);
                    const year = d.getFullYear();
                    const month = d.getMonth();
                    const resdb = await Entry.find({year})
                    res.status(200).json(resdb)
                } catch (error) {
                    console.log(error)
                    res.status(500).send(error)
                }
        }
    }
}

module.exports = entry;