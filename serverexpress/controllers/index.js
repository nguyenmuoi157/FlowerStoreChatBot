const express = require('express')
const route = express.Router();
const productController = require('./ProductController');

route.use('/product',productController);

route.get('/',function(req,res){
    res.send({
        mesage: 'root controller'
    })
})

module.exports = route;