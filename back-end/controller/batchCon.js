const Batch =  require("../models/batch")
function BatchCon(){
    return {
        add:async (req,res)=>{
            try {
                // 
                const data = req.body;
                const payload = new Batch(data)
                const resdb = await payload.save();
                res.status(200).send(resdb);
            } catch (error) {
                console.log(error);
                res.status(500).send(error);
            }
        },
        all:async (req,res)=>{
            try {
                    const resdata = await Batch.find();
                    res.status(200).send(resdata);
            } catch (error) {
                console.log(error);
                res.status(500).send(error);
            }
        },
         CStatus: async (req,res)=>{
            try {
                const _id = req.params.id;
                const status = !(req.body.status);
                await Batch.findByIdAndUpdate(_id,{status:status});
                const data = await Batch.find({});
                return res.status(200).json(data);
                
            } catch (error) {
                console.log(error);
                return res.status(500).send(error)
            }
        },
        delete: async(req,res)=>{
            try {


                const _id = req.params.id;
                const ac = await Batch.deleteOne({_id});
                const aData = await Batch.find({})
                res.status(200).json(aData)
            } catch (error) {
                res.status(500).send(error)
            }
        },
        getbyid:async (req,res)=>{
            try {
                const _id = req.params.id;
                const resDb = await Batch.findOne({_id});
                res.status(200).send(resDb);
            } catch (error) {
                console.log(error);
                res.status(500).send({msg:error})
            }
        },
        update:async (req,res)=>{
            try {
                const _id = req.body.id;
                const data = req.body.data;
                const resDb = await Batch.findByIdAndUpdate(_id,data)
                res.json(resDb);
            } catch (error) {
                console.log(error);
                res.status(500).send({msg:error})
            }
        },
    }
}



module.exports = BatchCon;