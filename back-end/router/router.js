
const LoginCon = require("../controller/loginCon.js");
const Auth = require("../controller/AuthChacker.js")
const Course = require("../controller/courseCon");
const auth = require('../middleware/auth')
const entry = require('../controller/entry');
const Htk = require("../controller/HtkCon");
const msg = require("../controller/msg")
function rout(app){
           
            
    // set route 
    // set home route 
        app.get('/',(req,res)=>{
            res.json({name:"nahid"});
        });

        // login post req controller 
        app.post("/login", LoginCon().login)
        app.post("/changepassword",auth,LoginCon().changepassword)

        //chack auth 
        app.get('/chackAuth',Auth().chackBycookie);

        // add course
        app.post('/addcourse',auth,Course().addCourse)
        // get all course
        app.get("/getallcourse",auth,Course().getallcourse)
        app.get("/deletecourse/:id",auth,Course().delete)
        app.get("/getActiveCourse",auth,Course().getActiveCourse)
        app.post("/cstatus/:id",auth,Course().CStatus)
        // add htk
        app.post('/addhtk',auth,Htk().addHtk)
        app.get("/getallhtk",auth,Htk().getallhtk)
        app.post("/htkstatus/:id",auth,Htk().CStatus)
        app.get("/getActiveHtk",auth,Htk().getActiveHtk)
        
        app.get("/deletehtk/:id",auth,Htk().delete)
        //entry route
        app.post('/addentry',auth,entry().addEntry)
        app.get("/getentrymonth",auth,entry().month)
        app.get("/getappointment",auth,entry().getAppointment)
        app.get("/getentryby/:id",auth,entry().getByID)
        app.post("/updateVisitorEntry",auth,entry().updateByID)
        app.post("/changestatusentry/:id",auth,entry().changeStatus)
        app.post("/changenextdate",auth,entry().changeNextCD)
        app.post("/getyeardataan",auth,entry().getyeardataan)
        app.post("/delete-visitor",auth,entry().deletebyid);
        //query data
        app.post("/queryentrydata",auth,entry().query)
        app.get("/getadmitedcount",auth,entry().getadmitedcount)
        // get csv 
        app.get("/getcsv",auth,entry().getcsv)
        // getdataforsms
        app.post("/getdataforsms",auth,msg().getdata)
        app.get("/getsmsbalance",auth,msg().getbalenced);
        app.post("/sendsmstoall",auth,msg().sendmsgall);
        app.post("/sendsmssingal",auth,msg().sendsmssingal);
}

module.exports = rout;