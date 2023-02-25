const ExcelJS  =  require('exceljs');
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
                coment,
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
                    comment:coment,
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
        all:async (req,res)=>{
          
            try {
                let datadb =await Entry.find().sort({createdAt:-1});
                res.status(200).json(datadb)
            } catch (error) {
                console.log(error)
                res.status(500).send(error)
            }
        },
        getAppointment:async (req,res)=>{
            const{date} = req.body;
            if(date){
                try {
                    const resdb = await Entry.find({nextCD:date});
                    return res.status(200).send(resdb);
                } catch (error) {
                    console.log(error)
                   return res.status(500).send(error)  
                }
            }
            
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
        updateByID: async (req,res) => {
            const { name,
                mobile,
                company,
                HTK,
                decision,
                cc,
                nextd,
                coment,
                course1,
                course2,
                course3 } = req.body.data;
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
                    const _id = req.body.id;
                    const datadb =await  Entry.findByIdAndUpdate(_id,{
                        name,
                        mobile,
                        company,
                        HTK,
                        comment:coment,
                        courses,
                        decision,
                        CC,
                        nextCD,
                    })
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
                const {_id,date,coment} = req.body;
                const resdb = await Entry.findByIdAndUpdate(_id,{nextCD:date,comment:coment});
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
        getyeardataan: async (req,res)=>{
            let d = new Date()
                try {
                    const {year} = req.body;
                    const numbe = +year
                    if(typeof(numbe) === "string"){
                        numbe = d.getFullYear()
                    }
                    const total = await Entry.find().countDocuments()
                    const totaltoday = await Entry.find({date:d.getDate(),year:numbe,month:d.getMonth()}).countDocuments()
                    const resdb = await Entry.find({year:numbe})
                    res.status(200).json({data:resdb,c:{total,totaltoday}})
                } catch (error) {
                    console.log(error)
                    res.status(500).send(error)
                }
        },
        query: async (req,res)=>{
                try {
                   const {value} = req.body;
                    const number = parseFloat(value);

                    if(!number){
                        const regX = new RegExp(value,"i")
                        const dbdata = await Entry.find({name:regX})
                        res.status(200).json(dbdata);

                    }else{
                        const regX = new RegExp(number,"i")
                        const dbdata = await Entry.find({mobile:regX})
                        res.status(200).json(dbdata);
                    }
                    
                } catch (error) {
                    console.log(error)
                    res.status(500).send(error)
                }
        },
        getadmitedcount: async (req,res)=>{
            try {
               
                const add = await Entry.find({admited:true}).countDocuments()
                const noadd = await Entry.find({admited:false}).countDocuments()
                res.status(200).json({
                    add,
                    noadd
                })
            } catch (error) {
                console.log(error)
                res.status(500).send(error);
            }
        },
        getcsv:async (req,res)=>{
            try {
                const workbook = new ExcelJS.Workbook();
                const worksheet = workbook.addWorksheet("entrys");
                worksheet.columns = [
                    {header:"_id",key:"_id"},
                    {header:"name",key:"name"},
                    {header:"mobile",key:"mobile"},
                    {header:"company",key:"company"},
                    {header:"HTK",key:"HTK"},
                    {header:"courses",key:"courses"},
                    {header:"CC",key:"CC"},
                    {header:"nextCD",key:"nextCD"},
                    {header:"comment",key:"comment"},
                    {header:"decision",key:"decision"},
                    {header:"admited",key:"admited"},
                    {header:"year",key:"year"},
                    {header:"month",key:"month"},
                    {header:"day",key:"day"},
                    {header:"date",key:"date"},
                    {header:"createdAt",key:"createdAt"},
                    {header:"updatedAt",key:"updatedAt"}
                ];

                const Edata = await Entry.find();

                Edata.forEach((e)=>{
                    worksheet.addRow(e)
                });
                res.setHeader(
                    "Content-Type",
                    "application/vnd.openxmlformats-officedocument.spreadsheatml.sheet"
                )
                res.setHeader(
                    "Content-Disposition",`attachment: filename=entry.xlsx`
                )
                return workbook.xlsx.write(res).then(()=>{
                    res.status(200);
                })

            } catch (error) {
                console.log(error)
                res.send(error)
            }
        },
        deletebyid:async (req,res)=>{
            try {
                const _id = req.body.id;
                const response =await Entry.findByIdAndDelete(_id);
                if(response){
                    res.status(200).send("deleted the data")
                }else{
                    res.status(500).send("bad req");
                }
            } catch (error) {
                console.log(error);
                res.status(500).send("something wrong in server")
            }
        }
    }
}

module.exports = entry;