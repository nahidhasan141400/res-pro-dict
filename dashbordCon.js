const User = require("../models/userreg");
const Data = require("../models/Data");
const Payment = require("../models/Payment");
const Admin = require("../models/Admin");
const userC = (usersa) => {
  let temp = 0;
  for (let i = 0; i < usersa.length; i++) {
    temp += usersa[i].guest.length + 1;
  }
  return temp;
};

const DashbordCon = () => {
  return {
    get: async (req, res) => {
      let today = new Date();
      try {
        const eData = await Data.findOne({});
        const all_Admindata = await Admin.find({});
        const alluser = await User.find();
        const alluserP = await User.find({"Payment.status":true});

        const allleadsdata = (ad,allu)=>{
          let temp_name = [];
          let temp_number =[];

          for (let i = 0; i < ad.length; i++) {
            temp_name.push(ad[i].name);
            let t_num = 0;

            const filterdat = allu.filter((us)=> {
              let t_a = ""+us.AdminRef;
              let t_b = ""+ad[i].user;
              return t_a === t_b
            });
           
            
            for (let j = 0; j < filterdat.length; j++) {
              let guestT = filterdat[j].guest.length + 1 || 1;
              
              t_num += guestT;  
            }
            temp_number.push(t_num)
          }
         
        return {
          name:temp_name,
          number:temp_number
        }
        }
    


        if (!eData) {
          let load = new Data({
            name: "no Name",
            date: "00-00-0000",
            status: false,
          });

          const resedata = await load.save();

          const data = await User.find().sort({ _id: -1 }).limit(10);
          //

          //count status

          const respay = await Payment.findOne({});

          // const amount =  0;
          const amount = respay ? respay.amount || 0 : 0;

          const Today_user = await User.find({
            createdAt: {
              $lte: today,
              $gte: new Date(
                today.getFullYear(),
                today.getMonth(),
                today.getDate()
              ),
            },
          });

        

          // payment
          const Today_user_pay = await User.find({
            updatedAt: {
              $lte: today,
              $gte: new Date(
                today.getFullYear(),
                today.getMonth(),
                today.getDate()
              ),
            },
            "Payment.status": true,
          }).countDocuments();

          const Tomorow_user_pay = await User.find({
            "Payment.status": true,
          }).countDocuments();

          const stats = {
            user: {
              today: userC(Today_user),
              total: userC(alluser),
            },
            payment: {
              today: Today_user_pay * amount,
              total: Tomorow_user_pay,
            },
          };

          //user in my lead
          const Myleads = await User.find({
            AdminRef: req.Admin.user,
            "Payment.status":true,
          }).countDocuments();
          
          //end

          res.render("dashBoard", {
            user: data,
            event: resedata,
            stats,
            Myleads,
            Ad: req.Admin,
            adl: JSON.stringify(allleadsdata(all_Admindata,alluserP))
            // adl: JSON.stringify({name:"nahid"})
          });
        } else {
          const data = await User.find().sort({ _id: -1 }).limit(10);

          //count status

          const respay = await Payment.findOne({});

          // const amount =  0;
          const amount = respay ? respay.amount || 0 : 0;

          const Today_user = await User.find({
            createdAt: {
              $lte: today,
              $gte: new Date(
                today.getFullYear(),
                today.getMonth(),
                today.getDate()
              ),
            },
          });
          //user in my lead
          const Myleads = await User.find({
            AdminRef: req.Admin.user,
            "Payment.status":true,
          }).countDocuments();


          // payment
          const Today_user_pay = await User.find({
            updatedAt: {
              $lte: today,
              $gte: new Date(
                today.getFullYear(),
                today.getMonth(),
                today.getDate()
              ),
            },
            "Payment.status": true,
          });

          const Tomorow_user_pay = await User.find({ "Payment.status": true });
          // console.log({
          //     td:Today_user_pay,
          //     tm:Tomorow_user_pay
          // })

          const money = (arr) => {
            temp = 0;
            for (let i = 0; i < arr.length; i++) {
              temp += +arr[i].Payment.ammount;
            }
            return temp;
          };

          const stats = {
            user: {
              today: userC(Today_user),
              total: userC(alluser),
            },
            payment: {
              today: money(Today_user_pay),
              total: money(Tomorow_user_pay),
            },
          };
          

          res.render("dashBoard", {
            user: data,
            event: eData,
            stats,
            Myleads,
            Ad: req.Admin,
            adl: JSON.stringify(allleadsdata(all_Admindata,alluserP))
            // adl: JSON.stringify({name:"nahid"})
          });
        }
      } catch (error) {
        console.log(error);
        res.send("error");
      }
    },
  };
};

module.exports = DashbordCon;
