/* eslint-disable-next-line*/
import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'
import '../Detail.css'
import axios from 'axios'


let 박스 = styled.div`
    padding:20px;
`;

let 제목 = styled.h4`
    font-size:20px;
    color:${props => props.color};
`;

//component를 만드는데 css를 미리 입혀놓은 컴포넌트를 만드는 것임
// 클래스를 작명할 필요 없음 

function Detail(props) {

    let { id } = useParams();
    // parameter가 들어오는 것임 
    let history = useHistory()
    //방문 기록 등을 저장해놓는 object

    let shoe = {}
    for (var i = 0; i < props.shoes.length; i++) {
        if (props.shoes[i].id === Number(id)) {
            shoe = props.shoes[i]
            break
        }
    }

    let [alertCheck, alertChange] = useState(true)

    useEffect(() => {

        // axios.get("https://codingapple1.github.io/shop/data2.json")
        // .then((result)=>{
        //     console.log(result)
        // })
        // detail창을 켰을 때,ajax를 통해서 서버로부터 데이터 가져오기 

        // 2초 후에 alert 창을 없애주세욧
        let 타이머 = setTimeout(() => {
            alertChange(false)
        }, 3000)

        return function 어쩌구() {
            //컴포넌트가 사라질 때 실행되도록 하는 코드 
            //타이머를 제거해야 버그가 일어나지 않음
            clearTimeout(타이머)
        }
    }, [alertCheck]);
    //배열안에 있는 state가 변경될 때만 update에 따른 useEffect 재실행을 함 




    let [something, changeSomething] = useState("");
    // 컴포넌트가 mount(보일때), 업데이트 될 때 실행됨

    return (
        <div className="container">
            <박스>
                <제목 className="white">Detail</제목>
            </박스>


            <input onChange={function (e) {
                changeSomething(e.target.value)
            }}>
            </input>

            <p>{something}</p>


            {
                alertCheck === true ?
                    <div className="my-alert2">
                        재고가 얼마 남지 않았습니다 !!
                    </div>
                    : null
            }

            <div className="row">
                <div className="col-md-6">
                    <img src={shoe.src} width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{shoe.title}</h4>
                    <p>{shoe.content}</p>
                    <p>{shoe.price} 원</p>

                    <Remain remain={props.remain[id]}></Remain>

                    <button className="btn btn-danger" onClick={()=>{
                        var _remain=[...props.remain]
                        _remain[id]=props.remain[id]-1
                        props.remainFunc(_remain)
                    }}>주문하기</button>
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

function Remain(props){
    return(
        <p>재고 : {props.remain}개 </p>
    )
}



export default Detail