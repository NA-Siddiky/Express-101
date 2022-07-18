const fs = require('fs');

exports.homeController = (req, res) => {
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
}
exports.errorController = (req, res) => {
    const error = new Error('Bad Request');
    error.status = 400;
    throw error("Bad Request");
}

exports.aboutController = (req, res) => {
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
}

exports.helpController = (req, res) => {
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
}
