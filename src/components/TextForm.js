import React,{useState} from 'react'

export default function TextForm(props) {
    const[text,setText]=useState("Enter text here");
    const handleUpClick=()=>{
         // setText("you have clicked on handle up click");
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleOnChange=(event)=>{
        // console.log("on change");
        setText(event.target.value);
    } 
    const handleDownClick=()=>{
        setText(text.toLowerCase());
    }
    const handleClearClick=()=>{
        let newText="";
        setText(newText);
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    const reverse=()=>{
        let newtext='';
        for(let i=0;i<text.length;i++){
            newtext+=text[text.length-i-1];
        }
        setText(newtext);
    }
    const handleCapitalize = () => {
        let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
        setText(newText);
    }
    const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces=()=>{
        let newTxt=text.split(/[ ]+/);
        setText(newTxt.join(" "));
    }
    // const[size,setSize]=useState(12);
    // const fontchange=(e)=>{
    //     setText(e.target.value)
    // }
    // const changeFont=()=>{
    //     setSize({
    //         fontSize:"50px"
    //     })
    // }
    return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}> 
        <h2 className='mb-3' >{props.heading}</h2>
      <div className="mb-3">
    <label htmlFor="myBox" className="form-label">Example textarea</label>
    <textarea className='form-control' value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="3" ></textarea>
    {/* <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
    */}
  </div>
  <button type="submit" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
  <button type="submit" className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to LowerCase</button>
  <button type="submit" className="btn btn-primary mx-2" onClick={handleClearClick}>Click Text</button>
  <button type="submit" onClick={reverse} className="btn btn-warning mx-2 my-2">Reverse</button>
  <button type="submit" onClick={handleCapitalize} className="btn btn-warning mx-2 my-2">Handle</button>
  <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
  <button type='button' onClick={handleCopy} className='btn btn-danger'>copy item</button>
  <button type='button' onClick={handleExtraSpaces} className='btn btn-secondary'>rem extra spaces</button>
  {/* <button type='button' onClick={changeFont} onChange={fontchange} value={size} className='btn btn-secondary'>change font size</button> */}

  </div>
  <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>Your text summary</h1>
    <p>{text.split(' ').length} words and {text.length} characters</p>
    <p>{0.008*text.split(' ').length}Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"enter something in the textbox above to preview it here"}</p>
  </div>
  </>
  )
}
