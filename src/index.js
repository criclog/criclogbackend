const express = require("express")
const connection = require("./config/connection")
const auth1Route=require("./routes/auth1.routes")
const adminauthRoute=require("./routes/adminauth.routes")
const marketRoute = require("./routes/market.route");
const cors = require("cors");



const app= express()
app.use(cors('*'));

app.use(express.json());

   connection()
   app.use('/v1', auth1Route)
   app.use('/admin', adminauthRoute)
   app.use(marketRoute);








   



const port=7000;

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})



