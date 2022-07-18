const express = require('express');
const fs = require('fs');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const router = require('./routes/routes')

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());
app.use(globalMiddleware);
app.use(router);

app.use((req, res, next) => {
    // res.status(404).send('<h1>Page not found</h1>')
    const error = new Error('404 not Found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    console.log("Error", error);

    if (error.status) {
        return res.status(error.status).send(`<h1>${error.message}</h1>`);
    }
    res.status(500).send('<h1>Something Went Wrong</h1>');
})

//run server
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});






//creating customs middleware
function globalMiddleware(req, res, next) {
    console.log(`${req.method} - ${req.url}`);
    console.log("global middleware");

    if (req.query.bad) {
        return res.status(400).send('Bad Request');
    }

    next();
}

function localMiddleware(req, res, next) {
    console.log(`${req.method} - ${req.url}`);
    console.log("local middleware");

    next();
}