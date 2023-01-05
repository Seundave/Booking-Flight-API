const express = require("express");
const app = express();

const {json} = require("express");

const user = require("./router/userRoute");
app.use(json());
app.use("/user", user);


const PORT = process.env.PORT || 3000; //port to connect


app.get("/", function (req,res){
    res.send("Zuri Training")
});

app.listen(PORT,()=>{
    console.log(`Serving on port ${PORT}`)
});