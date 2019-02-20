var mongoose = require('mongoose');
import timestamps from 'mongoose-timestamp';

mongoose.Promise = global.Promise;

let ProductSchema = mongoose.Schema({
    Productname : String,
    Price : Number,
    PromotionPrice: Number,
    Count: Number,
    ViewCount: Number
})
ProductSchema.plugin(timestamps);

module.exports = mongoose.model('Produuct', ProductSchema,'Produucts');
