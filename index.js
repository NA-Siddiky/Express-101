const express = require('express');
const fs = require('fs');
const cors = require('cors');
const morgan = require('morgan');

const app = express()

//middleware(global - work on every router)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

app.get('/', (req, res) => {
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

app.get('/about', (req, res) => {
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

app.get('/help', (req, res) => {
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

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});