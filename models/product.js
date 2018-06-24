var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    productName:{
        type: String,
        required: true
    },
    productDescription: {
       type: String,
       required: true
    },
    amount:{
        type: Number,
        required: true
    } 
});

module.exports = mongoose.model('Product', productSchema);