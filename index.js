const express=require('express');
const router=require("./router/index");
const path = require("path");
const ejs = require("ejs");
const app=express();
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.static('public'))
const PORT =4000;
app.use("/", router);
app.listen(PORT, ()=>{
    console.log(`server running on http://127.0.0.1:${PORT}`);
});