const Htk = require('../models/HTK');
const htk = ()=>{
    return{
        addHtk:async (req,res)=>{
            const {htk} = req.body;
            try {
                const data = new Htk({
                    name:htk,
                    status:true
                })
                const resdata = await data.save()
              return  res.status(200).json(resdata);
            } catch (error) {
                console.log(error)
                return   res.status(500).send(error)
            }
        }
    }
}

module.exports = htk;