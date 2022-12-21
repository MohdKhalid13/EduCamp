import React from "react";
import { FaGraduationCap } from "react-icons/fa";

function Intro(props){


    return(
        <>
  <div className={"jumbotron p-5"}>
    <h1 className><FaGraduationCap className="Cap"/>{props.title}</h1>
    <p className="lead">This is a simple hero unit of a {props.aboutText}, a simple component for calling extra attention to featured content or information.</p>
    <hr className="my-4"/>
    <p>It uses utility classes for Students.</p>
    {/* <button type="button" onClick={toggleStyle} className="btn btn-dark my-5">{btntext}</button> */}
  </div>

        </>
    )
}

export default Intro