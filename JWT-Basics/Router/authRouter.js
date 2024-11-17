const express =require('express');
const {login,dashboard}=require("../Controllers/login")
const authMiddleware = require("../Middlewares/auth");
const router=express.Router();
router.route('/login').post(login);
router.route('/dashboard').get(authMiddleware,dashboard);
module.exports=router;
