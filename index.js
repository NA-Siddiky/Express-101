const express = require('express');
const fs = require('fs');

const app = express()

app.get('/', (req, res) => {
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
    res.send(
        `<h1>I am about route</h1>`
    )
})
app.get('/help', (req, res) => {
    res.send(
        `<h1>I am help route</h1>`
    )
})

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});