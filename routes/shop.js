const path = require('path')
const express = require('express')
const rootDir = require('../util/path')
const shoprouter = express.Router();
const adminData = require('./admin')

shoprouter.get('/',(req,res,next ) => {
   const products = adminData.products
   res.render('shop',{prods:products})
   // console.log(adminData.products)
   // res.sendFile(path.join(rootDir,'views','shop.html'));
    // .. or ../ both will work
})


module.exports = shoprouter