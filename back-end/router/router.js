
const LoginCon = require("../controller/loginCon.js");
const Auth = require("../controller/AuthChacker.js")
const Course = require("../controller/courseCon");
const auth = require('../middleware/auth')
const entry = require('../controller/entry');
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
        app.post("/cstatus/:id",auth,Course().CStatus)

        //entry route
        app.post('addentry',entry().addEntry)

}

module.exports = rout;