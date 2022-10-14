require('dotenv').config();
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

const mongoose = require('mongoose');



var XLSX       = require('xlsx');
var multer     = require('multer');
 


// set port 
const PORT = process.env.PORT || 3300;

// config cors 
const cors = require("cors");
app.use(cors({
    credentials: true,
    origin : "*"
}))



// database connections 
mongoose.connect(process.env.MONGO_CONNECTION_URL,{ useUnifiedTopology: true ,useNewUrlParser: true }).then((result) => {
    console.log('db connected');
}).catch((err) => {
    console.log(err)
});


//multer
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './backup')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  });
  
  var upload = multer({ storage: storage });


// uuid
// uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
// console.log(uuidv4());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cookieParser());



const rout = require('./router/router');
rout(app);


// backup route 
const arr = require("./lib/toarr")
const Entry = require("./models/entry")
function str(s){
    return s.slice(1,-1)
}

app.post('/importxlsx',upload.single('file'), async (req,res)=>{

    try {
        var workbook =  XLSX.readFile(req.file.path);
        var sheet_namelist = workbook.SheetNames;
        const dataj =  XLSX.utils.sheet_to_json(workbook.Sheets[sheet_namelist[0]],{ header: 0, raw: false, dateNF: 'yyyy-mm-dd' });


        let dataarr = dataj.map((d)=>{
                let ad ;
                if(d.admited === "true" || d.admited === "TRUE"){
                    ad = true;
                }else{
                    ad = false;
                }
                 let crdr = new Date(d.createdAt);
                 let updr = new Date(d.updatedAt);
                 let crd = `${crdr.toISOString()}`;
                 let upd =`${updr.toISOString()}`;
                 return   {
            "name": d.name || "",
            "mobile": d.mobile || "",
            "company": d.company || "",
            "HTK": d.HTK || '',
            "courses": arr(d.courses),
            "decision": d.decision || "",
            "CC": d.CC || "",
            "nextCD": d.nextCD || "",
            "comment": d.comment || "",
            "admited": ad,
            "year": +d.year,
            "month": +d.month,
            "day": +d.day,
            "date": +d.date,
            "createdAt": crd ,
            "updatedAt": upd,
            
          }
         });
            const resdb = await Entry.insertMany(dataarr)
         res.status(200).send("ok")
    } catch (error) {
        console.log(error);
        res.status(500).send("error");
    }
    
  });

app.use((err,req,res,next)=>{
    if(err){
        res.status(500).send(err.message);
    }else{
        res.send("sucsses")
    }
})
// init server 
app.listen(PORT , () => {
    console.log(`server start on:`)
    console.log(`http://localhost:${PORT}`)
})



    // var x=0;
    // sheet_namelist.forEach(element => {
    //     var xlData =
    //     excelModel.insertMany(xlData,(err,data)=>{
    //         if(err){
    //             console.log(err);
    //         }else{
    //             console.log(data);
    //         }
    //     })
    //     x++;
    // });
    // res.redirect('/');