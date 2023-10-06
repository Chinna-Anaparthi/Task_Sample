const express = require('express')
let app = express()


app.get('/test',(req,res)=>{
    console.log()
    return res.status(200).json({message:`ping at chinna`})
})

app.listen(3000,()=>{
    console.log(`server is running on ${3000}`)
})