import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

function Detail(props) {

    let { id } = useParams();
    // parameter가 들어오는 것임 
    let history = useHistory()
    //방문 기록 등을 저장해놓는 object

    let shoe={}
    let len=props.shoes.length
    for(var i=0;i<len;i++){
        if(props.shoes[i].id===Number(id)){
            shoe=props.shoes[i]
            break
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={shoe.src} width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{shoe.title}</h4>
                    <p>{shoe.content}</p>
                    <p>{shoe.price} 원</p>
                    <button className="btn btn-danger">주문하기</button>
                    <p></p>
                    <button className="btn btn-danger" onClick={() => {
                        history.goBack()
                    }}>뒤로가기</button>

                    <button className="btn btn-danger" onClick={() => {
                        history.push('/')
                        //push : 특정 경로로 이동 
                    }}>홈으로 가기</button>

                </div>
            </div>
        </div>
    )
}


export default Detail