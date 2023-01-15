const Admin = require('../models/admin.js');
const ncrip = require("ncrip");
const auth = ()=>{
    return {
        chackBycookie : async(req,res)=>{
            const {me,go} = req.cookies;
            if(!me && !go){
                return res.status(401).send({err:"not authenticat"})
            }
            try {
                const _id = ncrip.dnc(me,go);
                const data = await Admin.findOne({_id});
                if(!data){
                    return  res.status(401).send({err:"not authenticat"})
                }else{
                    return res.status(200).send({
                        name:data.name,
                        username:data.username,
                        phone:data.phone,
                        email:data.email,
                        photo:data.photo
                    })
                }
            } catch (error) {
                return res.status(500).send({error});
            }
        }
    }
}

module.exports= auth;