// import library
const express = require("express"); // require express
const mongoose = require("./db/conn"); // conn.js
const User = require("./model/userSchema"); // userSchema


// Variables
const app = express();
const PORT = 3000;


// use 
app.use(express.json());
app.use(require("./router/auth"));


// Routing

/* 
url = /
params = none
access = public
method = get
*/
app.get("/",(req,res)=>{
    res.json({Message : "Success"});
});

/* 
url = /about
params = none
access = public
method = get
*/
app.get("/about",(req,res)=>{
    res.json({Message : "about page"});
});


/* 
url = /contact
params = none
access = public
method = get
*/
app.get("/contact",(req,res)=>{
    res.json({Message : "contact page"});
});


/* 
url = /signin
params = none
access = public
method = get
*/
app.get("/signin",(req,res)=>{
    res.json({Message : "signin page"});
});


/* 
url = /signup
params = none
access = public
method = get
*/
app.get("/signup",(req,res)=>{
    res.json({Message : "signup page"});
});

app.post("/signup",async(req,res)=>{
    console.log(req.body);
})


// Server Listening
app.listen(PORT,()=>{
    console.log(`server has been started on port ${PORT}`);
})