var express = require('express')
var app = express()
var path = require('path')
var cors=require('cors')
// app.use(express.static(path.join(__dirname,'shop/build')))
app.use(cors())
app.listen(8888, function () {
    console.log("start! express server on port 8888 : Axios")
})

app.get('/', function (req, res) {
    // console.log(__dirname)
    // res.sendFile(path.join(__dirname, "shop/build/index.html"))
    res.send("msg from server")
})