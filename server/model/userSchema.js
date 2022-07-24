//  import mongoose

const mongoose = require("mongoose");// mongoose
const bcrypt = require("bcryptjs"); //bcrypt
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
    },
    work:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    tokens:[{
        token:{
            type:String,
            required:true,
        }
    }]


});


userSchema.pre("save",function(next){
    const user = this;
    const round = 8;
    if(!this.isModified("password")){
        next();
    }
    const genSalt = bcrypt.genSalt(round,(err,salt)=>{
        if(err) return next(err)
        bcrypt.hash(user.password,salt,(err,hash)=>{
            if(err) next(err)
            user.password = hash;
            // user.cpassword = hash;
            return next();
        })
    })
})


userSchema.methods.generateAuthToken = async function(){
    try {
        const token = await jwt.sign({
            _id:this._id.toString()
        },"thisistarachandandtarachandisgoodbadboy");
        this.tokens = this.tokens.concat({token});
        return token;

    } catch (error) {
        console.log("Token error is "+error); 
    }
}


userSchema.statics.matchPassword = async(email,password)=>{
    try {
        const match = await bcrypt.compare(password,email.password);
        if(match){
            return true;
        }
        else{
            return false;
        }
    } catch (error) {
        console.log("Token error is "+error); 
    }
}

const User = mongoose.model("user",userSchema);

module.exports = User;