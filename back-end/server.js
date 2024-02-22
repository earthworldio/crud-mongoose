const express = require('express')
const db = require('./connect-db')
const app = express()
const port = 3000

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var cors = require('cors')
app.use(cors())
app.use(require('./controllers/UserControllers'))
app.use(require('./controllers/ListController'))


app.listen(port, () => { console.log(`App listening on port : ${port}`); })