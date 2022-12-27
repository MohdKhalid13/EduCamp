import React,{useState} from "react";
import Navbar from "./components/Navbar"
import propTypes from 'prop-types'
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About"
import Intro from "./components/Intro";
import Donate from "./components/Donate";
import Footer from "./components/Footer";
import {Routes , Route} from "react-router-dom";
import "./App.css"


function App(){

  const [mode,setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      // document.body.style.backgroundColor = '#042743';
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success");
      document.title = "EduCamp:- Dark Mode Enabled"
      }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "success")
      document.title = "EduCamp:- Light Mode Enabled"
    }
  }
  
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    },1500)
  }

  return(
    <>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        <Intro title="EduCamp" aboutText="Educational Term" />
        <Routes>
          <Route path="/" element={<About/>}></Route>
          <Route path="/TextForm" element={<TextForm showAlert={showAlert} mode={mode} heading="Enter The Text To Analyze"/>}></Route>
          <Route path="/Donate" element={<Donate showAlert={showAlert} mode={mode}  />}></Route>
        </Routes>
        <Footer mode={mode} />
    </>

  )
}

Navbar.propTypes = {
  title : propTypes.string.isRequired,
  aboutText : propTypes.string.isRequired
}

Navbar.defaultProps = {
  title : "MD KHALID",
  aboutText : "BE IN MECH"

}

export default App;