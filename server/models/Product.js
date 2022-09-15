const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        productName:{
            type: String,
            required: true
        },
        color:{
            type: String,
            required: true
        },
        category: String,
        status: String
    }
)
 
module.exports = mongoose.model('Product', productSchema);