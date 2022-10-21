
const SMS = require("../models/smsTemp");

const sms_temp = ()=>{
    return {
        addSMSt: async (req,res)=>{
            const {sms,text} = req.body;
            try {
                const data = new SMS({
                    name:sms,
                    text,
                    status:true
                }) 
                const resdata = await data.save()
              return  res.status(200).json(resdata);
            } catch (error) {
                console.log(error)
                return   res.status(500).send(error)
            }
        },
        updateSMSt: async (req,res)=>{
            const {_id,name,text} = req.body;
            try {
                // const data = new SMS({
                //     name:sms,
                //     text,
                //     status:true
                // }) 
                const resdata = await SMS.findByIdAndUpdate(_id,{name,text})
                const dbsendd = await SMS.find();
              return  res.status(200).json(dbsendd);
            } catch (error) {
                console.log(error)
                return   res.status(500).send(error)
            }
        },
        getallsms : async (req,res)=>{
            try {
                const allcourse = await SMS.find({});
                res.send(allcourse)
            } catch (error) {
                res.status(500).send(error)
            }
        },
        delete: async(req,res)=>{
            try {
                const _id = req.params.id;
                const ac = await SMS.deleteOne({_id})
                const aData = await SMS.find({})
                res.status(200).json(aData)
            } catch (error) {
                res.status(500).send(error)
            }
        },
        CStatus: async (req,res)=>{
            try {
                const _id = req.params.id;
                const status = !(req.body.status);
                await SMS.findByIdAndUpdate(_id,{status:status});
                const data = await SMS.find({});
                return res.status(200).json(data);
                
            } catch (error) {
                console.log(error);
                return res.status(500).send(error)
            }
        },
        getActiveSMS:async (req,res)=>{
            try {
                const resDb = await SMS.find({status:true}).sort({ name: 1} );
                res.json(resDb);
            } catch (error) {
                console.log(error);
                res.status(500).send({msg:error})
            }
        }
    }
}

module.exports = sms_temp;