
const express = require('express')
const app = express()
const port = 3000 | process.env.port;

app.get('/', (req, res) => res.send('Still cant upload your app?'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
