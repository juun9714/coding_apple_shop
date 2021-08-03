var express = require('express');
var app = express();

const HTTPServer=app.listen(8080, function(){
    console.log("server is opened at 8080 : WebSocket")
});

var WS = require('ws')

var WSS=new WS.Server(
    {
        server:HTTPServer,
    }
)

WSS.on('connection', (ws, req) => {
    ws.send("connection welcome")

    ws.on('message', (msg) => {
        console.log("receive msg : %s", msg)
    })

    ws.on('error', (err) => {
        console.log("error")
    })

    ws.on('close', () => {
        console.log("end")
    })

})