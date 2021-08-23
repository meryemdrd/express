//require express
const express = require('express')
const app = express ()
const logger = require('./Middleware/logger')

//app level middleware
app.use(logger)

//parse the data
app.use(express.json())

app.use(express.static(__dirname+"/public"))
const PORT = 7000;
app.listen(PORT,(err)=>{
    err
    ?console.log(err)
    :console.log(`the server is running on port ${PORT}`)
})