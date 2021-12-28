const path = require('path')
const express = require('express')
const rootDir = require('../util/path')

const router = express.Router();

const products = [];
// wont work if we add router.use. router exact match will works only for get,post
router.get('/add-product',(req,res,next ) => {
    // send has to be last one
    res.sendFile(path.join(rootDir,'views','add-product.html'))
})

router.post('/add-product',(req,res,next)=>{
    products.push({title:req.body.title})
    res.redirect('/')
})


exports.routes = router;
exports.products = products;