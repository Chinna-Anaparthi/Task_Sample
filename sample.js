const express = require('express')
let app = express()
const Server= require("./Logic")
const mongoose = require("mongoose");
var parser = require("body-parser");
const dotenv = require("dotenv").config();
app.use(parser.json());
const cors = require('cors');
app.use(cors());
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("hosting MongoDB Connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.get('/UserGet',(req,res)=>{
   Server.DataGet(req,res,()=>
   {});
})

app.post('/UserPost',(req,res)=>{
    Server.DataPost(req,res,()=>
    {});
 })

 app.put("/UserUpdate/:id", (req, res, next) => {
    Server.DataPut(req, res, () => {});
  });

  app.delete("/UserDelete/:id", (req, res, next) => {
    Server.DataDelete(req, res, () => {});
  });

  app.get('/RegularFieldWork', (req, res) => {
    Server.FieldworkGet(req, res, () => { })
})


const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})