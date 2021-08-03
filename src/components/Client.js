import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Client() {
    let [resp,respChange]=useState('')
    return (
        <div>
            < button className="btn btn-primary" onClick={() => {
                axios.get('http://127.0.0.1:8888')
                    .then((result) => {
                        console.log(result)
                        respChange(result.data)
                    })//success
                    .catch(() => {
                        console.log("fail")
                    })//fail
            }}>Axios request</button >

            <p>{resp}</p>
        </div>
    )
}

export default Client