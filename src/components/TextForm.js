import React, {useState} from "react";

function TextForm(props){
    
    const Remove = () => {
        const sentence = text.replace(/\s+/g, ' ').trim()
        // const sentence = text.trim();
        setText(sentence)
        props.showAlert("Extra Spaces is Removed","success")

    }
   
    const capitalize = () => {

      const words = text.split(" ");
      let a = words.map((word) => { 
          return word[0].toUpperCase() + word.substring(1); 
      }).join(" ");
      
      setText(a);
      props.showAlert("First Letter is Capitalize","success")

    }

    const handleUpClick = () =>{
         let innertext = text.toUpperCase();
         setText(innertext);
         props.showAlert("Converted to UpperCase","success")
    }

    const handleLowClick = () =>{
        let innertext = text.toLowerCase();
        setText(innertext); 
        props.showAlert("Converted to LowerCase","success")

    }

    const handleOnchange = (event) =>{
        setText(event.target.value)
    }

    const ClearText = () =>{
        setText(" ")
        props.showAlert("Text Cleared","success")

    }

    function myFunction() {
      var copyText = document.getElementById("myBox");
      copyText.select();
      // copyText.setSelectionRange(0, 99999);
      navigator.clipboard.writeText(copyText.value);
      props.showAlert("Text Copied!","success")

    }
    
    function Read(){
    // Initialize new SpeechSynthesisUtterance object
    let speech = new SpeechSynthesisUtterance();

    // Set Speech Language
    speech.lang = "en";

    document.getElementById("read").addEventListener("click", () => {
    // Set the text property with the value of the textarea
    speech.text = document.getElementById("myBox").value;

    // Start Speaking
   window.speechSynthesis.speak(speech);
   });
   props.showAlert("Text in Reading!","success")
    }
    
    const [text,setText] = useState("") 

    return(

          <div className="container">
            <h1 className="Head mt-5" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>{props.heading}</h1>
            <div className="container">
            <div className="form-group mb-3">
               <textarea className="form-control" value={text} onChange={handleOnchange} id="myBox" style={{backgroundColor: props.mode === 
                'dark' ? 'white' : 'black', color: props.mode === 'light' ? 'white' : 'black'}} rows="3"></textarea>
            </div>
               <button type="button" onClick={Remove} className="btn btn-outline-primary mt-1 mx-1">Remove Spaces</button>
               <button type="button" onClick={capitalize} className="btn btn-outline-primary mt-1 mx-1">Convert First Letter Uppercase</button>
               <button type="button" onClick={handleUpClick} className="btn btn-outline-primary mt-1 mx-1">Convert to Uppercase</button>
               <button type="button" onClick={handleLowClick} className="btn btn-outline-primary mt-1 mx-1">Convert to LowerCase</button>
               <button type="button" onClick={ClearText} className="btn btn-outline-primary mt-1 mx-1">ClearText</button>
               <button type="button" onClick={myFunction} className="btn btn-outline-primary mt-1 mx-1">Copy Text</button>
               <button type="button" id="read" onClick={Read} className="btn btn-outline-primary mt-1 mx-1">Read Text</button>

            <div id="textform" className="container my-3 mt-5" style={{color: props.mode === 'light'? 'black' : 'white'}}>
               <h3>Your Text Summary</h3>
               <p>{text.split(" ").length} words and {text.length} characters</p>
               <p>{0.008 * text.split(" ").length} Minutes Required to Read.</p>
               <h2>Preview</h2>
               <p>{text.length>0 ? text : " Enter The Text To Preview "}</p>
            </div>                
            </div>
          </div>


    )
}

export default TextForm