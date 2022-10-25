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
    }
}



module.exports = BatchCon;