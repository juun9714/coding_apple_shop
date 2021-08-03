import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Client2() {

    let [res, resChange]=useState('')
    return (
        <div>
            < button className="btn btn-primary" onClick={() => {
                var ws=new WebSocket("ws://localhost:8080")
                ws.onopen=function(){
                    console.log("connected")
                    ws.send("hello server")
                }

                ws.onmessage=function(msg){
                    console.log(msg)
                    resChange(msg.data)
                }
            }}>Websocket request</button >
            <p>{res}</p>
        </div>
    )
}

export default Client2