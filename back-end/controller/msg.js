
const Entry = require("../models/entry"); 
const queryParse= require("../lib/query")
const axios = require("axios")

const msg = () => {
    return{
        getdata:async (req,res)=>{
                try {
                    const data = await Entry.find(queryParse(req.body));
                    res.status(200).json(data)
                } catch (error) {
                    console.log(error);
                    res.status(500).send("ok")
                }

        },
        getbalenced:async (req,res)=>{
            try {
                let res_axios = await axios(`http://sms.dewanict.com/miscapi/${process.env.SMS_KEY}/getBalance`);
                const bl = res_axios.data;
                res.status(200).json(bl)

            } catch (error) {
                console.log(error)
                res.send(error)
            }
        },
        sendmsgall:async (req,res)=>{

            console.log(req.body);

            res.send(req.body.msg)
        }

    }
}

module.exports = msg;