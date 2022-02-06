const express= require("express");
const app = express();
const bodyParser=require("body-parser")

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("Public"));

app.get("/", (req,res)=>{
   res.sendFile(__dirname+"/index.html");
})

app.post("/result", (req,res)=>{
    let {Name, Date} =req.body;
    res.sendFile(__dirname+"/result.html");
})

app.listen(3000, ()=>{
    console.log("Port3000 is runing");
});