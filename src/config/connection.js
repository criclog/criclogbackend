 const mongoose= require("mongoose");

 const connection=()=>{
    try{
        mongoose.connect("mongodb+srv://sept_2_batch:qJ1CualCN7K0u876@criclog017.qt7xb.mongodb.net/server007?retryWrites=true&w=majority&appName=Criclog017")
        console.log("mongoDB connected")
    }
    catch(err){
        console.log(`connection error:${err.message}`)
    }
};

module.exports=connection;