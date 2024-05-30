import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("uppercase was clicked "+ text);
        let newText = text.toUpperCase();
        setText("You have click on handle on click")
        setText(newText)
        props.showAlert("Converted to uppercase", "success")
    }
    const handleLowClick= ()=>{
        // console.log("uppercase was clicked "+ text);
        let newText = text.toLowerCase();
        setText("You have click on handle on click")
        setText(newText)
        props.showAlert("Converted to lowercase", "success")
    }


    const handleonChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }

    const handleClear = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Text is cleared", "success")

    }

    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy to clipboard", "success")
    }
    const [text , setText] = useState('');
    // text = "new text"  wrong way to change the state 
    // setText = "new text"  correct way to change the state 
  return (
    <>    <div className = "container" style={{color : props.mode==='dark'?'white':'rgb(24 47 58)'}}>
        <h1 >{props.heading} </h1>
            <div className="mb-3">
            <label htmlFor="myBox" className="form-label"></label>
            <textarea className="form-control" value = {text} onChange = {handleonChange} style={{backgroundColor : props.mode==='dark'?'#091a22':'white', color :props.mode==='dark'?'white':'rgb(24 47 58)' }} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase </button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase </button>
            <button className="btn btn-primary mx-1" onClick={handleClear}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button> 
    </div>
    <div className="container my-3" style={{color : props.mode==='dark'?'white':'rgb(24 47 58)'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and  {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>

  )
}
