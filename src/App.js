/* eslint-disable-next-line*/

import './App.css';
import { Nav, Navbar, Container, NavDropdown, Button } from 'react-bootstrap';
import React, { useState } from 'react'
import Data from './data'
function App() {

  let [shoes, shoes변경] = useState(Data)


  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">SHOE_SHOP</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
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
            shoes.map((shoe, idx)=>{
              return(
                <Card key={idx} shoe={shoe}></Card>
              )
            })
          }
        </div>
      </div>


      {/* bootstrap 문법 : 화면 사이즈 작으면 세로 일렬로 정렬, 크면 가로 일렬로 정렬*/}
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img src={props.shoe.src} width="100%"></img>
      <h4>{props.shoe.title}</h4>
      <p>{props.shoe.content} & {props.shoe.price}</p>
    </div>
  )
}


export default App;
