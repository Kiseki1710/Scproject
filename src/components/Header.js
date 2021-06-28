import React from 'react';
import logo from './scblogo.png';
import logo2 from './audreigirl.png';

function Header(){
  return <header>
    <img src={logo} style={{width: "4%", height: "4%", marginTop:"0.7rem", marginRight:"2rem"}}/>

    <h1 style={{marginTop: "1rem"}}>AuDRei</h1>
    <img src={logo2} style={{width: "4%", height: "4%", marginLeft: "3rem"}} />
  </header>
}
export default Header;
