const express=require("express")
const {config}=require("./config")
const router=require('./router')
const app=express();


app.use('/v1',router())
app.use('/',(req,res)=>{
    res.send("Hrms Api")
})

app.listen(config.port,()=>{
    console.log(`Server started on port ${config.port}`)
})