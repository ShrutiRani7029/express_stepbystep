const express=require("express");//express ko import krliya
const path=require("path")
const bodyParser = require("body-parser")

const app=express(); //call express
const port=4000;
app.use(bodyParser.urlencoded({extended:false}));


app.get("/",(req,res)=>{
    //console.log(path.join(__dirname+"/index.html"));
    res.sendFile(path.join(__dirname+"/index.html"));
})

app.post("/api/v1/login",(req,res)=>{
    res.send(`NAME: ${req.body.name} EMAIL: ${req.body.email}`);
    console.log(req.body);
})



app.listen(port,()=>{
    console.log(`Server is working on port: ${port}`)
})