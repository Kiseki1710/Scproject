import React from 'react';
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';
import * as ReactBootStrap from 'react-bootstrap';

function Card(props){
  return <div className="note" style={{backgroundColor: 'lightgreen'}}>
  <h1>{props.name}</h1>
  <p>Enter Release ID(Comma seperated for multiple entries)</p>
  <EditText id="input" style={{width:"70%", textAlign:"center", backgroundColor: 'white', margin: "auto"}} />

  <ReactBootStrap.Button variant="success" style={{margin: "1rem 0 0 12.3rem"}}>Submit</ReactBootStrap.Button>

  </div>
}
export default Card;
