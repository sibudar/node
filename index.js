const express = require("express") ; 
const app = express() ; 
const mysql = require("mysql") ; 
const con = mysql.createConnection({
    host: "localhost",
    username: "root",
    password: ""
});

con.connect((err)=>{
    if (err) throw err;
    console.log("connected");
    
})

//port to listen to 
app.listen(3100,()=>{
    console.log("why me") ; 
});

//route to go to and display following message
app.get("/",(res,req)=>{
    req.send("hello world") ; 
})