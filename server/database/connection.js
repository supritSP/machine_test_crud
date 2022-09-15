const mongoose = require("mongoose");

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log("DB connected")
    } catch (err) {
        console.log(error)
    }
}

module.exports = connectDB;