
const express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())
const port = 3000 | process.env.PORT;

app.get('/', (req, res) => res.send('Still cant upload your app?'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
