var mongoose = require('mongoose');
var Schema = mongoose.Schema;

import timestamps from 'mongoose-timestamp';

mongoose.Promise = global.Promise;

const ProductSchema = new Schema({
    Productname : String,
    Price : Number,
    PromotionPrice: Number,
    Count: Number,
    ViewCount: Number,
    isSale: Boolean
})

ProductSchema.plugin(timestamps);

//const productModel = mongoose.model("Product", ProductSchema);
export default mongoose.model("Product", ProductSchema);
//module.exports = mongoose.model('Produuct', ProductSchema);
