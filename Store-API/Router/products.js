const express=require('express');
const router =express.Router();
const {
    getAllProducts,getProduct
}
=require("../Controllers/products");

router.route('/').get(getAllProducts);
router.route('/static').get(getProduct);
module.exports=router;