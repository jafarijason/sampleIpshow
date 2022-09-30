const express = require('express')
const os = require('os')
const ip = require('ip');
const app = express()
const port = 8080

app.get('/', async (req, res) => {
    const hostname = await os.hostname();

     // my ip address
    res.send(`${hostname}-${ip.address()}`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})