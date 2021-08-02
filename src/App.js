/* eslint-disable-next-line*/

import './App.css';
import Detail from './components/Detail';
import { Nav, Navbar, Container, NavDropdown, Button } from 'react-bootstrap';
import React, { useState } from 'react'
import Data from './data'
import { Link, Route, Switch } from 'react-router-dom'
import axios from 'axios'



function App() {

  let [shoes, shoes변경] = useState(Data)
  let [재고, 재고변경]=useState([10,11,12])
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand><Link to="/">SHOE_SHOP</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/detail/0">Detail</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Switch>

        {/* route를 통해서 페이지 이동을 흉내내는 것임 */}
        <Route exact path="/">
          <div className="Jumbo">
            <h3>20% Season Off!</h3>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information
            </p>
            <Button variant="info">Learn More</Button>{' '}
          </div>

          <div className="container">
            <div className="row">
              {
                shoes.map((shoe, idx) => {
                  return (<Card key={idx} shoe={shoe}></Card>)
                })
              }
            </div>
            <button className="btn btn-primary" onClick={()=>{

              // axios.post('서버 URL',{id:"coding_apple",pw:1234})
              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((result)=>{
                var shoes2=[...shoes]
                for(var i=0;i<result.data.length;i++){
                  shoes2.push(result.data[i])
                }
                shoes변경(shoes2)

                //shoes변경([...shoes,...result.data]); <= 똑같은 결과 
              })//success
              .catch(()=>{
                console.log("fail")
              })//fail
            }}>더보기</button>
          </div>
        </Route>


        <Route path="/detail/:id">
          <Detail shoes={shoes} remain={재고}></Detail>
        </Route>

        {/* <Route path="/:id">
          { :id
          => url parameter 
          => 슬래시 뒤에 아무 문자나 왔을 때 실행하는 것  }
          <div>아무거나 적었을 때 이거 보여주세여</div>
        </Route> */}

      </Switch>
      {/* switch : 여러 경로가 match될 때, 가장 위에서 매치된 Router만 보여준다. */}

    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img alt="pic" src={'https://codingapple1.github.io/shop/shoes'+(props.shoe.id+1)+'.jpg'} width="100%"></img>
      <h4>{props.shoe.title}</h4>
      <p>{props.shoe.content} & {props.shoe.price}원</p>
    </div>
  )
}



export default App;
