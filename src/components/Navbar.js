import React,{Component} from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import logo from './scblogo.png'
import {LinkContainer} from 'react-router-bootstrap'

function Navbar(){
  return <>
  <ReactBootStrap.Navbar bg="dark" variant="dark">
    <ReactBootStrap.Nav className="mr-auto">
    <img
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
        style={{marginTop: ".3rem", marginRight: "1rem"}}
      />
      <LinkContainer to="/body1">
      <ReactBootStrap.Nav.Link activeStyle>Generate AuDRei Scores</ReactBootStrap.Nav.Link>
      </LinkContainer>
      <LinkContainer to="/body2">
      <ReactBootStrap.Nav.Link activeStyle>Release Health Report</ReactBootStrap.Nav.Link>
      </LinkContainer>
      <LinkContainer to="/body3">
      <ReactBootStrap.Nav.Link activeStyle>Generate AuDRei Score from local</ReactBootStrap.Nav.Link>
      </LinkContainer>
    </ReactBootStrap.Nav>


  </ReactBootStrap.Navbar>
  <br />
</>
}
export default Navbar;
