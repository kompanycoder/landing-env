const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const path = require('path');
const port = process.env.PORT || 8080;
const App = express();
// App.use(express.static(__dirname + '/public'));
App.use(bodyParser.json());
App.use(cors());
App.get('/', (req, res)=>{
    // res.render();
    res.sendFile('/public/index.html', (err, results)=>{
        if(err) return err;
        results
    });
});


App.listen(()=>{
    console.log("Dev env initialised on :"+ port);
})

module.exports = App;