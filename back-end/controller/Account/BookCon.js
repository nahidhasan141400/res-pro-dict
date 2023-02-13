const AccountBook = require("../../models/AccountBook.js");
const BookCon = () => {
  return {
    AddBook: async (req, res, next) => {
      try {
        // console.log("🚀 ~ file: BookCon.js:4 ~ AddBook: ~ req.body", req.body)
        const { name, des, Intb } = req.body;
        const payLoad = new AccountBook({
          name,
          des,
          balance: Intb,
        });

        const resDB = await payLoad.save();
        res.status(200).send("ok");
      } catch (error) {
        console.log(error.keyPattern)
        console.log(error.code )
        if(error.code === 11000){
            res.status(500).send({ dublicate:error.keyPattern})
        }else{
            res.status(500).send({
                err:{
                    error,
                    msg:error
                }
            })
        }
        
      }

      
    },
  };
};

module.exports = BookCon;
