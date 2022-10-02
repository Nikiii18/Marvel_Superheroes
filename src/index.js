const express = require('express')
const routes = require('./routes')
const app = express()
const port = 5000

routes(app)

app.use(express.json())

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
  .on('error', () => {
    console.log(`Cannot run the server on port ${port}`)
  })
