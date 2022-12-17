const express = require("express");
const app = express();
const cors = require("cors");
//var validate = require('mongoose-validator')
//import {isEmail} from "mongoose-validator";
app.use(
    cors({
        origin:"*",
    })
)
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/Agri',{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("Connection Open")
    }).catch(err =>{
        console.log(err)
    });  


 const bodyParser = require("body-parser");
 app.use(bodyParser.urlencoded({extended:true}));
 app.use(express.json());

const registerschema = new  mongoose.Schema({
    farmername: { type: String },
   phone: {type: String, required: true },
  address:{type:String, required:true},
   crop:  {type: String, required: true},
   quan: {type: Number, required: true},
   cost: {type: Number, required: true},
   }

    );

const Register = mongoose.model("Register",registerschema);

app.get("/farmers", (req,res)=>{
//       res.sendFile(__dirname + "/Register_farmer.html");   
          Register.find((function(err,foundfarmers){
            if(!err){
                res.send(foundfarmers);
            }
            else{
                res.send(err);
            }
          }))
 });



app.post("/farm",(req,res)=>{
       const farmername =req.body.farmername;
       const phone =req.body.phone;
       const address= req.body.address;
       const crop =req.body.crop;
       const quan =req.body.quan;
       const cost =req.body.cost;  

       const farmer1= new Register({
        farmername,
        phone,
        address,
        crop,
        quan,
        cost
      
       });
farmer1.save();
console.log("farmer content added successfully");                                                                                       
});


//************signup page ******/ */

const signupschema = new  mongoose.Schema({
    username: { type: String,required: true},
      email:{type: String ,required:true},
      pass:{type: String, required:true},
      confirmpass:{type: String, required:true} 
});
 
const User =mongoose.model("User",signupschema);

app.get("/users", (req,res)=>{ 
              User.find((function(err,foundusers){
                if(!err){
                    res.send(foundusers);
                }
                else{
                    res.send(err);
                }
              }))
     });
    
    

app.post("/users",(req,res)=>{
    const username =req.body.username;
    const email =req.body.email;
    const pass =req.body.pass;
    const confirmpass =req.body.confirmpass;   
    
        // const olduser= User.findOne({email:email});
        // if(olduser){
        //     res.send({error:{email:email}});
        // }
       
    const user1= new User({username, email, pass, confirmpass });
user1.save();
console.log(" User content added successfully");                                                                                       
});
app.listen(5000,()=> {console.log("connected")});


