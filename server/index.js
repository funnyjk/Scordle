const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('Hello World!')
})

let scores = require('./routes/scores');

app.use('/scores', scores);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})