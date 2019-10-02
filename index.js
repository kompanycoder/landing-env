const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8080;
const App = express();
// App.use(express.static(__dirname + ''));
App.use(bodyParser.json());
App.get('/', (req, res)=>{
    // res.render();
    res.json({"message":"Hello World"});
});


App.listen(()=>{
    console.log("Dev env initialised on :"+ port);
})

module.exports = App;