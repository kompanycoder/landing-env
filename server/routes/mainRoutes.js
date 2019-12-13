const mainRouter = require("express").Router();

mainRouter.get('/', (req, res)=>{
    // res.send("Hello from developer dashboard mainRouter");
    
    res.send("Hello from backend");
    // res.status(200).sendFile('/index.html', (err, results)=>{
    //     if(err) return err;
    //     results;
    //     console.log(results);
    // });
});

mainRouter.get('/api/dashboard', (req, res)=>{
    res.status(200).json({
        msg: "Dashboard Detected!! Welcome Admin.",
        apiRequestCount: 39219,
        admin: true
    });
});

// mainRouter route for todo details
mainRouter.get('/api/todos', (req,res)=>{
    res.send("todo route initialised correctly");
})
// mainRouter route to in progress
mainRouter.get('/api/working_on',(req,res)=>{
    res.json({
        appsCount : 320,
        appBuild: {
            status: true,
        },
        appsMaintanance : 94,
        appBugs: 2
    });
});
// mainRouter route to get  list of projects to work on
mainRouter.get('/api/projects_list', (req,res)=>{
    res.json({
        projectsList: [
            {1: "Bookshelf mainRouter"},
            {2: "Portfolio mainRouter"},
            {3: "Game mainRouter"},
            {4: "Blog mainRouter"},
            {5: "Localhost-env mainRouter"},
            {6: "Drumkit mainRouter"},
            {7: "Flask mainRouter"}
        ]
    });
});

module.exports = mainRouter;