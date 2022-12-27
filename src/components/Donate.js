import React from "react";

const Donate = (props) => {

    function myFunction() {
        // Get the text field
        var copyText = document.getElementById("myInput");
      
        // Select the text field
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices
      
         // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Text Copied","success")

      }

    let imgSrc;

    imgSrc = require("/home/v-mmansuri/Mohd_Khalid/Project_s/EduCamp/educamp/src/assests/MdKhalid.jpeg")
    return(
        <>
        <div className="APP">
        <div className="CONT">
            <h1>UPI ID</h1>
          <input type="text" value="cadcad166@okaxis" id="myInput"/>
          <button id="cpy" onClick={myFunction}>Copy Text</button>
        </div>
        </div>

    <div className="app" id="don">
        <div className="container">
         <div className="img-container">
            <img src={imgSrc} alt=""></img>
         </div>
        </div>
    </div>
    </>
     
    )
}

export default Donate