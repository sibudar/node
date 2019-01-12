const express = require("express") ; 
const app = express() ; 


app.listen(3000,()=>{
    console.log("why me") ; 
});

app.get("/",(res,req)=>{
    req.send("hello world") ; 
})