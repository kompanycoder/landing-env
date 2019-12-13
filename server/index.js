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
    
    res.sendFile('/index.html');
    // res.status(200).sendFile('/index.html', (err, results)=>{
    //     if(err) return err;
    //     results;
    //     console.log(results);
    // });
});

App.get('/api/dashboard', (req, res)=>{
    res.status(200).json({
        msg: "Dashboard Detected!! Welcome Admin.",
        apiRequestCount: 39219,
        admin: true
    });
});

// app route for todo details
App.get('/api/todos', (req,res)=>{
    res.send("todo route initialised correctly");
})
// app route to in progress
App.get('/api/working_on',(req,res)=>{
    res.json({
        appsCount : 320,
        appBuild: {
            status: true,
        },
        appsMaintanance : 94,
        appBugs: 2
    });
});
// app route to get  list of projects to work on
App.get('/api/projects_list', (req,res)=>{
    res.json({
        projectsList: [
            {1: "Bookshelf App"},
            {2: "Portfolio App"},
            {3: "Game App"},
            {4: "Blog App"},
            {5: "Localhost-env App"},
            {6: "Drumkit App"},
            {7: "Flask App"}
        ]
    });
});


App.listen(port,()=>{
    console.log("Dev env initialised on :"+ port);
})

module.exports = App;