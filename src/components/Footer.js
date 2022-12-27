import React from "react";
import {Link} from "react-router-dom"
import { AiFillMail,AiOutlineGithub,AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook,BsLinkedin,BsGoogle } from "react-icons/bs";
import { FaGraduationCap,FaYoutube } from "react-icons/fa";


function Footer(props){

    return(
      <>
<footer className={`text-center text-lg-start bg-light text-muted mt-5 footer-${props.mode} bg-${props.mode}`} >
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom" style={{backgroundColor: props.mode === 'dark' ? '#222' : 'white', color: props.mode === 'light' ? 'black' : 'white'}}>
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    <div className="icon">
      <a href="https://www.google.com/" className="me-4 text-reset" target="_blank" rel="noopener noreferrer"><BsGoogle/></a>
      <a href="https://www.youtube.com/@merarail.13" className="me-4 text-reset" target="_blank" rel="noopener noreferrer"><FaYoutube/></a>
      <a href="https://www.instagram.com/md.khalid_13/" className="me-4 text-reset" target="_blank" rel="noopener noreferrer"><AiOutlineInstagram/></a>
      <a href="https://www.linkedin.com/in/mohammad-khalid-ajaj-ahmed-mansuri-b910b9187" className="me-4 text-reset" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
      <a href="https://github.com/MohdKhalid13" className="me-4 text-reset" target="_blank" rel="noopener noreferrer"><AiOutlineGithub/></a>
      <a href="https://www.facebook.com/profile.php?id=100011265421244" className="me-4 text-reset" target="_blank" rel="noopener noreferrer"><BsFacebook/></a>
      <a href="mailto:mohdkhalid.mansoori@gmail.com" className="me-4 text-reset" target="_blank" rel="noopener noreferrer"><AiFillMail/></a>
    </div>
  </section>

  <section style={{backgroundColor: props.mode === 'dark' ? '#222' : 'white', color: props.mode === 'light' ? 'black' : 'white'}}>
    <div className="container text-center text-md-start" style={{backgroundColor: props.mode === 'dark' ? '#222' : 'white'}}>
      <div className="row">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 mt-4">
          <h6 className="text-uppercase fw-bold mb-4">EduCamp<FaGraduationCap className="cap" /></h6>
          <p>
            EduCamp, This Website Is very beneficial for Students of HSC And SSC of Various Streams & Languages.
          </p>
        </div>

        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 mt-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Sites For Students
          </h6>
          <p>
            <a href="https://www.bbc.co.uk/learningenglish" className="text-reset" target="_blank" rel="noopener noreferrer">BBC Learning English</a>
          </p>
          <p>
            <a href="https://www.sciencelearn.org.nz/concepts/" className="text-reset" target="_blank" rel="noopener noreferrer">Science Learning Hub</a>
          </p>
          <p>
            <a href="https://www.symbolab.com/" className="text-reset" target="_blank" rel="noopener noreferrer">Symbolab</a>
          </p>   
          <p>
            <a href="https://www.wikipedia.org/" className="text-reset" target="_blank" rel="noopener noreferrer">Wikipedia</a>
          </p>
        </div>

        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 mt-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="https://www.joinindianarmy.nic.in/default.aspx" className="text-reset" target="_blank" rel="noopener noreferrer">Indian Army</a>
          </p>
          <p>
            <a href="https://www.joinindiannavy.gov.in/" className="text-reset" target="_blank" rel="noopener noreferrer">Indian Navy</a>
          </p>
          <p>
            <a href="https://indianairforce.nic.in/" className="text-reset" target="_blank" rel="noopener noreferrer">Indian AirForce</a>
          </p>
          <p>
            <a href="http://www.rrbmumbai.gov.in/" className="text-reset" target="_blank" rel="noopener noreferrer">RRB Mumbai</a>
          </p>
        </div>

        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 mt-4">
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p id="add"><i className="fas fa-home me-3"></i> Navi Mumbai, Maharashtra, India</p>
          <p id="email"><i className="fas fa-envelope me-3"></i>mohdkhalid.mansoori@gmail.com</p>
          <p><i className="fas fa-phone me-3"></i> + 91 XXXXX XXXXX</p>
          <p><i className="fas fa-print me-3"></i> + 022 XXXX XXXX</p>
        </div>
      </div>
    </div>
  </section>

  <div className="text-center p-4" style={{backgroundColor: props.mode === 'dark' ? '#222' : 'white', color: props.mode === 'light' ? 'black' : 'white'}}>
    <Link className="text-reset fw-bold" href="https://mdbootstrap.com/">@2022 copyright Md.Khalid</Link>
  </div>
</footer>
        </>
    )
} 

export default Footer;