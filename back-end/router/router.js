
const LoginCon = require("../controller/loginCon.js");
const Auth = require("../controller/AuthChacker.js")
const Course = require("../controller/courseCon");
const auth = require('../middleware/auth')
const entry = require('../controller/entry');
const Htk = require("../controller/HtkCon");
const msg = require("../controller/msg")
const sms_temp = require("../controller/smsCon");


// instructor 
const InstructorCon = require("../controller/instructor/instructor.js");
const instructorCon = require("../controller/instructor/instructor.js");
//batch
const BatchCon = require("../controller/batchCon")
// admin
const AminUserCon = require("../controller/Admin/AdminUserCon")
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
        app.post('/addcourse',auth,Course().upload.single('ph'),Course().addCourse)
        // get all course
        app.get("/getallcourse",auth,Course().getallcourse)
        app.get("/deletecourse/:id",auth,Course().delete)
        app.get("/getcoursebyid/:id",auth,Course().getbyid)
        app.get("/getActiveCourse",auth,Course().getActiveCourse)
        app.post("/cstatus/:id",auth,Course().CStatus)
        app.post("/updatecourse",auth,Course().updateC)
        // add htk 
        app.post('/addhtk',auth,Htk().addHtk)
        app.get("/getallhtk",auth,Htk().getallhtk)
        app.post("/htkstatus/:id",auth,Htk().CStatus)
        app.get("/getActiveHtk",auth,Htk().getActiveHtk)
        app.get("/deletehtk/:id",auth,Htk().delete)
        // add sms temp
        app.post('/addsmstemp',auth,sms_temp().addSMSt) 
        app.post('/updatesmstemp',auth,sms_temp().updateSMSt) 
        app.get("/getallsmst",auth,sms_temp().getallsms)
        app.post("/smstchangestatus/:id",auth,sms_temp().CStatus)
        app.get("/getActivesms",auth,sms_temp().getActiveSMS)
        app.get("/deletesmstemplate/:id",auth,sms_temp().delete)
        
        //entry route
        app.post('/addentry',auth,entry().addEntry)
        app.get("/getentrymonth",auth,entry().month)
        app.post("/getappointment",auth,entry().getAppointment)
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
        // instructor 
        app.post("/addinstructoraccount",auth,InstructorCon().upload.single('photo'),InstructorCon().addEnstructor);
        // deletInstructor
        app.get('/getallinstructor',auth,instructorCon().getAll);
        app.get("/deletInstructor/:id",auth,instructorCon().delete);
        app.get("/getinstructor/:id",auth,instructorCon().getbyid);
        app.post("/updateinstructor",auth,instructorCon().upbyid);
        //batch
        app.post("/addbatch",auth,BatchCon().add);
        app.get("/getallbatch",auth,BatchCon().all);
        app.post("/changebatch/:id",auth,BatchCon().CStatus);
        app.get("/deletebatch/:id",auth,BatchCon().delete);
        app.get("/getbatchby/:id",auth,BatchCon().getbyid);
        app.post("/updatebatch",auth,BatchCon().update);
        app.get("/getActiveBatch",auth,BatchCon().getActiveCourse);
        // admin controler 
        // app.get("/addadminuser")
    }

    module.exports = rout; 