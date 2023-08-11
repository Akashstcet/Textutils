import React,{useState} from 'react'

export default function TextForm (props){
  const handleUpClick=()=>{
    let newtext=text.toUpperCase();
    setText(newtext);
  }
  const handleDifferentWords=()=>{
    let newText=text.toLowerCase();
    const arr=newText.split(" ");
    const arrSet=new Set(arr);
    const sentence = [...arrSet].join(" ");
    setText(sentence)
  }

  const handleOnChange=(event)=>{
    setText(event.target.value);
  }
    
  const [text,setText]=useState('')

    return (
      <>
      <div className="container">
        <h3>{props.heading}</h3>
         <div className="mb-3">
            <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
        </div>
      
      <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
      <button className='btn btn-primary mx-1' onClick={handleDifferentWords}>Count different words(excluding common words)</button>

      </div>

      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters. </p>
        <p>Your text contains {text.split(" ").length} different words.</p>
      </div>
      </>
    )
  }



