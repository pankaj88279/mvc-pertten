const express=require('express')
const{mongoose}=require('../config/db')
let admincontroller=(req,res)=>{

 const Cat = mongoose.model('Cat', { name: String });

 const kitty = new Cat({ name:req.query.name });
 kitty.save()
 .then((d)=>{
    res.status(200).json({
    msg:"okk"
})
}).catch((e)=>{
    
    res.status(500).json({
        msg:'errore'
    })
})

 
}
exports.admincontroller=admincontroller