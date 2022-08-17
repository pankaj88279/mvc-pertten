const express=require('express');
const { adminroutes } = require('./routes\'/admin/adminroute');
const app=express();

require('dotenv').config();

const port=process.env.PORT;

app.use('/superadmin',adminroutes)


app.listen(port,()=>{
    console.log(`thise port is running on port${port}`)

})