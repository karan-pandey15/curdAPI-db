const mongoose = require("mongoose")

const mongoConn =  ()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/twenty",{
}).then( ()=>{
    console.log("connection successFull....");
}).catch( (err)=>{
    console.log(err)
});

}


module.exports = mongoConn;




