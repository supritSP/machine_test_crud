const express = require('express');
const dotenv = require('dotenv');
dotenv.config()
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');
const productRoute = require("./server/routes/router")

const connectDB = require('./server/database/connection')

const app = express();


const PORT = process.env.PORT 

// log requests
app.use(morgan('tiny'));

// db connection
connectDB();

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended : true}))

// set view engine
app.set("view engine", "ejs")
//app.set("views", path.resolve(__dirname, "views/ejs"))

// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))


// load routers
app.use('/', productRoute)

app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});