//  import mongoose
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/MernFullStack",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log(`database has been connected success...`);
}).catch((error)=>{
    console.log(`database not connected and error is ${error}`);
})

