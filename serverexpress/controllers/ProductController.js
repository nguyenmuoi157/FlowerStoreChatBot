const ProductModel = require('../models/Product');
import todo from '../models/todo';

const express =  require('express')
const route = express.Router();

route.get('/:id',function(req, res){
//console.log(req);

});

route.get('/',async function(req, res){
    let data = await ProductModel.find();
    console.log(data);
    res.send({
        mess:'susscess',
        data
    })
})


route.get('/create',async function(req,res){
    var newTodo = new Todo();
    newTodo.text = "todo 1";
    newTodo.idComplete = false;
    newTodo.save((err,data) => {
        if (err) {
            res.send(err);
            console.log('insert loi')
        } else {
            res.json(data);
            console.log('insert thanh cong')
        }
    });

    let data = await Todo.find();
    res.json({
        mess: data
    })

})

module.exports = route;