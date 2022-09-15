const Product = require('../models/Product')

// create product
exports.createProduct = async (req, res) => {
    
    const newProduct = new Product({
        productName: req.body.productName,
        color: req.body.color,
        category: req.body.category,
        status: req.body.status
    })
    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
        res.redirect("/add-product")
    } catch (err) {
        res.status(500).json(err);
    }
}

// get product
exports.findProduct = async(req, res) => {
try {
    const { page = 1, limit = 10 } = req.query;
    const product = await Product.find()
    .limit(limit * 1)
    .skip((page - 1) * limit);
    res.status(200).json(product);
} catch (err) {
    res.status(500).json(err);
}
}

// update product
exports.updateProduct = async(req, res) => {
try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, {new:true})
    res.status(200).json(updatedProduct)
} catch (err) {
    res.status(500).json(err)
}
}

// delete product
exports.deleteProduct = async(req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("deleted successfully")
    } catch (err) {
        res.status(500).json(err)
    }

}