
const Sessiondb = require("../../models/session");


const Session = ()=>{
    return{
        Add : async (req,res)=>{
            try {
                const data = req.body;
                const dbload = new Sessiondb({
                    name:data.name,
                    start: data.Start,
                    end:data.End,
                    status:true,
                });
                const resdb = await dbload.save();
                if(resdb){
                    res.status(200).json(resdb);
                }else{    
                    res.status(202).json(resdb)
                }
            } catch (error) {
                console.log(error);
                res.status(500).json("something is wrong chack the server log");
            }
        },
        getAll: async (req,res)=>{
            try {
                const resdb = await Sessiondb.find({});
                res.status(200).json(resdb);

            } catch (error) {
                console.log(error)
                res.status(500).json({"msg":"some thing is wrong chack log in server"});
            }
        },
        CStatus: async (req,res)=>{
            try {
                const _id = req.params.id;
                const status = !(req.body.status);
                await Sessiondb.findByIdAndUpdate(_id,{status:status});
                const data = await Sessiondb.find({});
                return res.status(200).json(data);
                
            } catch (error) {
                console.log(error);
                return res.status(500).send(error)
            }
        },
        delete: async(req,res)=>{
            try {


                const _id = req.params.id;
                const ac = await Sessiondb.deleteOne({_id});
                const aData = await Sessiondb.find({})
                res.status(200).json(aData)
            } catch (error) {
                res.status(500).send(error)
            }
        },
        getbyid:async (req,res)=>{
            try {
                const _id = req.params.id;
                const resDb = await Sessiondb.findOne({_id});
                res.status(200).send(resDb);
            } catch (error) {
                console.log(error);
                res.status(500).send({msg:error})
            }
        },
    }
}

module.exports = Session;