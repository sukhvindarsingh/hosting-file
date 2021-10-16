import React, { useState } from "react";
import './TextForm.css'

function TextForm(props) {
  const handleUppercaseClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to uppercase!','success');
  };
  const handleLowercaseClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to lowercase!','success');
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert('Text cleared!','success');
  };
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(text.value);
    props.showAlert('Text copied successfully!','success');
  };
  const handleExtaSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
    props.showAlert('Extra spaces has been removed!','success');
  }
  
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter the value");
  
  return (
    <>
      <div className='container' style={{color: props.mode === 'dark' ? 'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{backgroundColor: props.mode === 'dark' ? 'grey':'white',color: props.mode === 'dark' ? 'white':'#042743'}}
            id="myBox"
            rows="8"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 btn-1" onClick={handleUppercaseClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2 btn-2" onClick={handleLowercaseClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2 btn-3" onClick={handleClearClick}>
          Clear text
        </button>
        <button className="btn btn-primary mx-2 btn-4" onClick={handleCopy}>
          Copy text
        </button>
        <button className="btn btn-primary mx-2 btn-5" onClick={handleExtaSpaces}>
          Remove Exta Spaces
        </button>
      </div>
      <div className="container my-3n" style={{color: props.mode === 'dark' ? 'white':'#042743'}} >
        <h1>Your text summary</h1>
        <p></p>
        <p>
          {text.split(" ").length}words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter Something To Preview It Here'}</p>
      </div>
    </>
  );
}

export default TextForm;
