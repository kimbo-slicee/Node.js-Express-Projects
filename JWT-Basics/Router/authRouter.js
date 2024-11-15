const express =require('express');
const router=express.Router();
router.route('/').get((req, res, next)=>{
    console.log(req);
    console.log(res);
})
