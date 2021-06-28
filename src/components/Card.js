import React, {useState, useEffect} from 'react';
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';
import * as ReactBootStrap from 'react-bootstrap';



function Card(props){
  const [value, onChangeText] = useState('');
  function clicked(){
    fetch('/api',{
      method: 'POST',
      body: JSON.stringify({
        title: {value}
      }),
      headers: {
        "Content-type": "application/json"
      }
    }).then(response => response.json())
      .then(message => console.log(message))
  }

  return <div className="note" style={{backgroundColor: 'lightgreen'}}>
  <h1>{props.name}</h1>
  <p>Enter Release ID(Comma seperated for multiple entries)</p>
  <EditText id="input" style={{width:"70%", textAlign:"center", backgroundColor: 'white', margin: "auto"}}
            onChange = {text => onChangeText(text)}
            value = {value}
   />

  <ReactBootStrap.Button variant="success" style={{margin: "1rem 0 0 12.3rem"}} onClick = {clicked}>Submit</ReactBootStrap.Button>

  </div>
}
export default Card;
