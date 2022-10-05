
const LoginCon = require("../controller/loginCon.js");
const Auth = require("../controller/AuthChacker.js")
const Course = require("../controller/courseCon");
const auth = require('../middleware/auth')
const entry = require('../controller/entry');
const Htk = require("../controller/HtkCon");
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
        //entry route
        app.post('/addentry',auth,entry().addEntry)
        app.get("/getentrymonth",auth,entry().month)

}

module.exports = rout;