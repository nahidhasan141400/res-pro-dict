
const LoginCon = require("../controller/loginCon.js");
const Auth = require("../controller/AuthChacker.js")
function rout(app){
           
            
    // set route 
    // set home route 
        app.get('/',(req,res)=>{
            res.json({name:"nahid"});
        });

        // login post req controller 
        app.post("/login", LoginCon)
        app.get("/loginback",(req,res)=>{
            console.log(req.cookies);
            res.send({name:"nahid"})
        })

        //chack auth 
        app.get('/chackAuth',Auth().chackBycookie);
}

module.exports = rout;