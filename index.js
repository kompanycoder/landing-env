const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const path = require('path');
const port = process.env.PORT || 8080;
const App = express();
App.use(express.static(__dirname + '/public'));
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended: true}));
App.use(cors());
App.get('/', (req, res)=>{
    // res.send("Hello from developer dashboard app");
    // res.render('/public/index', (err, results)=>{
    //     if (err) return err;
    //     results;
    //     console.log(results);
    // });
    // res.render()
    res.status(200).sendFile('/index.html', (err, results)=>{
        if(err) return err;
        results;
        console.log(results);
    });
});

App.get('/api/dashboard', (req, res)=>{
    res.status(200).json({
        msg: "dashboard Connected!! Welcome @kompanycoder",
        apiRequestCount: 39219,
        admin: true
    });
});
App.listen(port,()=>{
    console.log("Dev env initialised on :"+ port);
})

module.exports = App;