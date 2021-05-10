import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './MyNavbar.css';

const MyNavbar = ()=>{
    return(
        <>
        <Navbar collapseOnSelect expand="lg" bg="#151618" variant="dark">
        <Navbar.Brand href="" className='brand' >
      
      <a href="" className='brand'>Tuneify</a>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link className='navlink' href="">About</Nav.Link>
      <Nav.Link className='navlink' href="">Sound Effects</Nav.Link>

    </Nav>
  </Navbar.Collapse>
</Navbar>
        </>
    )
};

export default MyNavbar;