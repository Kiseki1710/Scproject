import React from 'react';
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';
import * as ReactBootStrap from 'react-bootstrap';
import { Dropdown, Selection } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';
import { FilePicker } from 'react-file-picker'

let fileArray = ['1.txt','2.txt','3.txt'];

function clicked(){
  console.log(fileArray);


}
function Card3(props){
  return <div className="note" style={{backgroundColor: 'lightgreen'}}>
  <h1>{props.name}</h1>
  <p>Enter Release ID(Comma seperated for multiple entries)</p>
  <EditText id="idInput" style={{width:"70%", textAlign:"center", backgroundColor: 'white', margin: "auto"}} />
  <p>Enter Name</p>
  <EditText id="nameInput" style={{width:"70%", textAlign:"center", backgroundColor: 'white', margin: "auto", marginBottom: "10px"}} />
  <Dropdown
    style={{marginTop: "3vh"}}
    placeholder="Select File"
    className="rdn-control-arrow"
    options={fileArray}
    value="one"
    onChange={(value) => console.log('change!', value)}
    onSelect={(value) => console.log('selected!', value)} // always fires once a selection happens even if there is no change
    onClose={(closedBySelection) => console.log('closedBySelection?:', closedBySelection)}
    onOpen={() => console.log('open!')}
  />
  <FilePicker
  style ={{marginLeft: "160px", marginTop: "10px"}}
    extensions={['md']}
    onError={errMsg => (console.log(errMsg))}
  >
    <button style={{margin: "auto"}}>
      Click to upload File
    </button>
  </FilePicker>

  <ReactBootStrap.Button variant="success" style={{margin: "1rem 0 0 12.3rem"}} onClick= {clicked}>Submit</ReactBootStrap.Button>

  </div>
}
export default Card3;
