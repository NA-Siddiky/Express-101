const express = require('express');
const fs = require('fs');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const router = require('./routes/routes')

//middleware(global - work on every router)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());
app.use(globalMiddleware);
app.use(router);




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