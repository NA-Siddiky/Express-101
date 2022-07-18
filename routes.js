const router = require('express').Router();
const fs = require('fs');

router.get('/', (req, res) => {
    console.log(req.url)
    fs.readFile('./pages/index.html', (err, data) => {
        if (err) {
            console.log("Error", err);
            res.send(`<h1>Something went wrong</h1>`);
        }
        else {
            res.write(data);
            res.end();
        }
    }
    )
})

router.get('/about', (req, res) => {
    fs.readFile('./pages/about .html', (err, data) => {
        if (err) {
            console.log("Error", err);
            res.send(`<h1>Something went wrong</h1>`);
        }
        else {
            res.write(data);
            res.end();
        }
    }
    )
})

router.get('/help', (req, res) => {
    // res.send(
    //     `<h1>I am help route</h1>`
    // )
    fs.readFile('./pages/help.html', (err, data) => {
        if (err) {
            console.log("Error", err);
            res.send(`<h1>Something went wrong</h1>`);
        }
        else {
            res.write(data);
            res.end();
        }
    }
    )
})


module.export = router;