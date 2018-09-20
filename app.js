require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/', (req, res) => {
    logRequest(req)
    res.send('Hello Node.js!')
})

app.post('/', (req, res) => {
    logRequest(req)
    res.send('Hello Node.js!')
})

function logRequest(req) {
    var body = ((req.method === "POST") ? (JSON.stringify(req.body)) : "")
    console.log("Received " + req.method + " " + req.url + " " + body)
}