const express = require("express") ; 
const app = express() ; 

//port to listen to 
app.listen(3000,()=>{
    console.log("why me") ; 
});

//route to go to and display following message
app.get("/",(res,req)=>{
    req.send("hello world") ; 
})

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Result: " + result);
    });
  });