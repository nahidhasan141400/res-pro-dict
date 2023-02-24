const AccountHead = require("../../models/AccHead.js");
const HeadCon = () => {
  return{
        AddHead: async (req,res)=>{
            try {
                const {name,IOS} = req.body;
                const status = IOS === "income"?true:false;
                const load = new AccountHead({
                    name:name,
                    IOS:status
                })
                const resdb = await load.save();
                res.send(resdb)
            } catch (error) {
                if (error.code === 11000) {
                  res.status(500).send({ dublicate: error.keyPattern });
                } else {
                  res.status(500).send({
                    err: {
                      error,
                      msg: error,
                    },
                  });
                }
              }
        },
        getall:async (req,res)=>{
            try {
                const AllHead = await AccountHead.find({}).sort({ _id: -1 });
                res.send(AllHead);
              } catch (error) {
                res.status(500).send(error);
              }
        }
  }
};

module.exports = HeadCon;
