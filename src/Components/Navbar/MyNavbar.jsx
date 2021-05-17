import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './MyNavbar.css';

const MyNavbar = ()=>{
    return(
        <>
        <Navbar collapseOnSelect expand="lg" bg="#151618" variant="dark">
        <Navbar.Brand href="" className='brand' >
      
      <a href="#something" className='brand'>Tuneify</a>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link className='navlink' href="C:\Users\HP-PC\tuneify\src\Components\About\About.jsx">About</Nav.Link>
      <Nav.Link className='navlink' href="C:\Users\HP-PC\tuneify\src\Components\Main\Ambience.jsx">Sound Effects</Nav.Link>

    </Nav>
  </Navbar.Collapse>
</Navbar>
        </>
    )
};

export default MyNavbar;