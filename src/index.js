const express = require("express");
const app = express();
require("./DB/conn");

const Student = require("./model/student")
const port = process.env.PORT ||5000;
const studentRouter = require("./router/student")

app.use(express.json());
// register our router
app.use(studentRouter)

app.listen(port,()=>{
    console.log(`connection  is setup ${port}`)
})