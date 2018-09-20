require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    console.log("Received " + req.method + ": " + req.body)
    res.send('Hello Node.js!')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))