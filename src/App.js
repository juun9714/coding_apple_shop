/* eslint-disable-next-line*/

import './App.css';
import Detail from './components/Detail';
import { Nav, Navbar, Container, NavDropdown, Button } from 'react-bootstrap';
import React, { useState } from 'react'
import Data from './data'
import { Link, Route, Switch } from 'react-router-dom'



function App() {

  let [shoes, shoes변경] = useState(Data)


  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand><Link to="/">SHOE_SHOP</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><Link to="/">Home</Link></Nav.Link>
              <Nav.Link><Link to="/detail">Detail</Link></Nav.Link>
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
          </div>
        </Route>


        <Route path="/detail/:id">
          <Detail shoes={shoes}></Detail>
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
      <img alt="pic" src={props.shoe.src} width="100%"></img>
      <h4>{props.shoe.title}</h4>
      <p>{props.shoe.content} & {props.shoe.price}원</p>
    </div>
  )
}



export default App;
