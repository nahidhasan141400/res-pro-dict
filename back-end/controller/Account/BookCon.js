const AccountBook = require("../../models/AccountBook.js");
const BookCon = () => {
  return {
    AddBook: async (req, res, next) => {
      try {
        // console.log("🚀 ~ file: BookCon.js:4 ~ AddBook: ~ req.body", req.body)
        const { name, des, IntB } = req.body;
        console.log("🚀 ~ file: BookCon.js:8 ~ AddBook: ~ Intb", IntB)
        
        const payLoad = new AccountBook({
          name,
          des,
          balance: IntB,
        });

        const resDB = await payLoad.save();
        res.status(200).send("ok");
      } catch (error) {
        console.log(error)
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
    getall:async (req,res)=>{
        try {
            const allBooks = await AccountBook.find({}).sort({_id:-1});
            res.send(allBooks);
        } catch (error) {
            res.status(500).send(error)
        }
    },
    getbyid:async (req,res)=>{
      try {
          const Books = await AccountBook.findById(req.body._id);
          res.send(Books);
      } catch (error) {
          res.status(500).send(error)
      }
  }
  };
};

module.exports = BookCon;
