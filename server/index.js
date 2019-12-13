const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const path = require('path');
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const port = process.env.PORT || 8080;
const App = express();
App.use(express.static(__dirname + '/public'));
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended: true}));
App.use(cors());
App.use(cookieParser());
App.use(morgan("dev"));

const MainRouter = require("./routes/mainRoutes");
App.use(MainRouter);

App.listen(port,()=>{
    console.log("Dev env initialised on :"+ port);
})

module.exports = App;