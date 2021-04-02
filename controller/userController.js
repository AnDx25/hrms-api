const {Router} =require('express')

module.exports=()=>{
    const userApi=Router();

    userApi.get('/',(req,res)=>{
        console.log("Inside get of controller")

        res.json({
            message:"Get Request Successfull"
        })
    })

    userApi.post('/',(req,res)=>{
        console.log("I am inside Post of controller")

        res.json({
            message:"Post User"
        })
    })

    userApi.put('/:id',(req,res)=>{
        console.log("I am inside Put of Controller")

        res.json({
            message:"Put User"
        })
    })

    return userApi
}