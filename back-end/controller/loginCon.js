const Admin = require("../models/admin.js");
const ncrip = require("ncrip");



const loginCon = async(req,res)=>{
    let {username,password} = req.body;
    // console.log(res)
    try {
        const resdb = await Admin.findOne({name:"Dict"});
        const mainpass = ncrip.dnc(resdb.password,process.env.KEY);
        // console.log({
        //     username,password,mainpass,resdb
        // })
        if(username === resdb.username && password  === mainpass){

            const go = Math.round(Math.random()*1000);
            const me = ncrip.enc(resdb._id,go);

           return res.status(200).json({
            me,
            go
           })
        }else{
           return  res.status(401).send("unauthorized")
        }
    } catch (error) {
        
    }
    
    res.status(500)
};

module.exports =  loginCon;