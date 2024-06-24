const Router=require("express");
const path = require("path");
const express = require('express');
const router = Router();
router.get("/", (req, res)=>{
    return res.render("Mainhome.ejs");
});
router.get("/sunita", (req, res)=>{
      return res.render("portfoliohome.ejs");
});
router.get("/skills", (req, res)=>{
    return res.render("skills.ejs");
})
module.exports=router;