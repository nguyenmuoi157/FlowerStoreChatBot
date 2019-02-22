//const ProductModel = require('../models/Product');
import ProductModel from '../models/Product'
import todo from '../models/todo';

const express = require('express')
const route = express.Router();

route.get('/:id', async function (req, res) {
    try {
        let data = await ProductModel.findById(req.params.id).exec();
        res.json(data)

    } catch (error) {
        console.log(error)
    }


});

route.get('/', async function (req, res) {
    let data = await ProductModel.find();
    console.log(data);
    res.send({
        mess: 'susscess',
        data
    })
})


route.post('/create', async function (req, res) {

    var newproduct = new ProductModel();
    newproduct.Productname = req.body.Productname;
    newproduct.Price = req.body.Price;
    newproduct.PromotionPrice = req.body.PromotionPrice;
    newproduct.Count = req.body.Count;
    newproduct.ViewCount = req.body.ViewCount;
    newproduct.isSale = req.body.isSale;

    newproduct.save((err, data) => {
        if (err) {
            res.send(err);
            console.log('insert loi')
        } else {
            res.json(data);
            console.log('insert thanh cong')
        }
    });
})

route.put('/update/:id', function (req, res) {
    console.log(req.body)
    let data = req.body;
    let productId = req.params.id;
    let product = new ProductModel();

    product.update({ _id: productId }, data, function (err, raw) {
        if (err) {
            res.send(err);
        } else {
            res.json(raw)
        }
    });
})

module.exports = route;