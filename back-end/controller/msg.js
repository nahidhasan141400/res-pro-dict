
const Entry = require("../models/entry"); 
const queryParse= require("../lib/query")
const axios = require("axios")

const msg = () => {
    return{
        getdata:async (req,res)=>{
                try {
                    console.log(queryParse(req.body))
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
                res.status(200).json(bl);
            } catch (error) {
                console.log(error)
                res.send(error)
            }
        },
        sendmsgall: (req,res)=>{
                const {data,msg,id} = req.body;
                var s = [];
                var f = [];
                var s_id = "";

                if(id){
                    s_id = "Dewan ICT";
                }else{
                    s_id = "8804445629106";
                }


                data.forEach((e,i) => {
                    let t_n = e.mobile;

                    if(t_n[0] === "0"){
                        t_n = `88${t_n}`
                    }
                    console.log(s_id)
                     axios(`http://sms.dewanict.com/smsapi?api_key=${process.env.SMS_KEY}&type=text&contacts=${t_n}&senderid=${s_id}&msg=${msg}`).then(function (response) {
                        // handle success
                        
                        if(response.data.indexOf("SMS SUBMITTED: ID") !== -1){
                            s.push(response.data)
                        }else{
                            console.log(response.data)
                            console.log("f")
                            f.push(response.data)
                        }

                        if(data.length === i+1){
                            res.status(200).json({f,s})
                        }
                      })
                      .catch(function (error) {
                        // handle error
                        f.push(error)
                        if(data.length === i+1){
                            res.status(200).json({f,s})
                        }
                      })
                     
                   
                });
              
            
        },
        sendsmssingal: async (req,res)=>{
            try {
                let s_id = "";
                    const {number,msg,id} = req.body;
                    if(id){
                        s_id = "Dewan ICT";
                    }else{
                        s_id = "8804445629106";
                    }
                    let resax =await axios(`http://sms.dewanict.com/smsapi?api_key=${process.env.SMS_KEY}&type=text&contacts=${number}&senderid=${s_id}&msg=${msg}`);

                    if(resax.data.indexOf("SMS SUBMITTED: ID") !== -1){
                        return res.status(200).send(resax.data);
                    }else{
                        return res.status(500).send("some thing is wromg in server to send sms")
                    }

            } catch (error) {
                console.log(error);
                res.status(500).send(error);
            }
        }

    }
}

module.exports = msg;