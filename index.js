const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const path = require('path');
const port = process.env.PORT || 8080;
const App = express();
// App.use(express.static(__dirname + '/public'));
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended: true, }));
App.use(cors());
App.get('/', (req, res)=>{
    res.send("Hello from developer dashboard app");
    // res.render()
    // res.sendFile('/public/index.html', (err, results)=>{
    //     if(err) return err;
    //     results
    // });
});


App.listen(port,()=>{
    console.log("Dev env initialised on :"+ port);
})

module.exports = App;