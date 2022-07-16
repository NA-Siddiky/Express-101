const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send(
        `<h1>I am home route</h1>`
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