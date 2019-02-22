//const ProductModel = require('../models/Product');
import ProductModel from '../models/Product'
import todo from '../models/todo';

const express = require('express')
const route = express.Router();

route.get('/:id', async function (req, res) {
    try {
        let data = await ProductModel.findById(req.params.id).exec();
        if (data) {
            res.json(data)
        } else {
            res.json({
                mess: 'san pham khong ton tai'
            })
        }
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

route.put('/update/:id', async function (req, res) {
    let data = req.body;
    let productId = req.params.id;
    try {
        let product = await ProductModel.findById(productId).exec();
        if (product) {
            ProductModel.updateOne({ _id: productId }, data, function (err, raw) {
                if (err) {
                    res.json({
                        mess: 'err',
                        err
                    });
                } else {

                    res.json({
                        mess: 'succses',
                        raw
                    })
                }
            });
        } else {
            res.json({
                mess: 'product not found'
            })
        }
    } catch (err) {
        res.json({
            mess: 'error',
            err
        })
    }


})

route.delete("/delete/:id", async function (req, res) {
    let productid = req.params.id;
    console.log(productid)
    try {
        let product = await ProductModel.findById(productid).exec();
        if (product) {
            let result = await ProductModel.deleteOne({ _id: productid }).exec()
            console.log(result);
            res.json({
                mess: 'xoa thanh cong',
                result
            })
        } else {
            res.json({
                err: 'san pham khong ton tai'
            })
        }

    } catch (error) {
        res.send(error)
    }

})

module.exports = route;