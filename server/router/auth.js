//library
const express = require("express"); //express
const User = require("../model/userSchema");


const router = express.Router();


/* 
url = /
params = none
access = public
method = get
*/
router.get("/",(req,res)=>{
    res.json({message : "this is router home page"});
});



/* 
url = /signup
params = none
access = public
method = POST
*/
router.post("/signup",async(req,res)=>{
    try {
        const {name,email,phone,work,password,cpassword} = req.body;
        const checkMail = await User.findOne({email});
        if(!checkMail){
            if(password===cpassword){
                const user = new User({name,email,phone,work,password,cpassword});
                const token = await user.generateAuthToken();
                const data = await user.save();
                return res.status(200).json({data,token,message:"signup success"});
            }
            else{
                return res.status(203).json({error : "PPassword does not match"});
            }
        }
        else{
            return res.status(404).json({error : "email already exist"});
        }
    } catch (error) {
        return res.status(500).json({error : error});
    }
    

});




/* 
url = /signin
params = none
access = public
method = POST
*/

router.post("/signin",async(req,res)=>{
    try {
        const {email,password} = req.body;
        const emailExist = await User.findOne({email});
        if(emailExist){
            const matchPassword = await User.matchPassword(emailExist,password);
            if(matchPassword){
                const token = await emailExist.generateAuthToken();
                // console.log(token);
                return res.status(200).json({token,message : "login successfully"});
            }
            else{
                return res.status(404).json({message : "password does not match"});
            }
        }
        else{
            return res.status(404).json({error : "email not exist"});
        }

    } catch (error) {
        return res.status(500).json({error : error});
    }
});


module.exports = router;