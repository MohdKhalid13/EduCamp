import React,{useState} from "react";

function About(){


  const [Head, SetHead] = useState("Enable Light Mode")

  const [MyStyle, setMystyle] = useState({
    color:'white',
    backgroundColor: 'black'
  })

  const toggleMode = ()=>{
    if(MyStyle.color === 'black'){
      setMystyle({
        color:'white',
        backgroundColor: 'black',
      })
      SetHead("Enable Light Mode")
    }else{
      setMystyle({
        color:'black',
        backgroundColor: 'white'
      })
      SetHead("Enable Dark Mode")

    }
  }

    return(
      
<div className="container my-3">
  <div className="accordion" id="accordionExample" >
  <h1 className="Heading mb-5">The Education Camp...</h1>

   <div className="accordion-item" style={MyStyle}>
    <h2 className="accordion-header" id="headingOne" style={MyStyle}>
      <button className="accordion-button" style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">HSC - SCIENCE</button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      
      <div className="nav-links mt-5 mb-5">
 <ul>
  <li><a href="https://drive.google.com/file/d/1kcc5uqU0-z7tO9-YNyGaXqZJzZis2S1_/view?usp=sharing" rel="noopener noreferrer" target="_blank">Physics</a></li>
  <li><a href="https://drive.google.com/file/d/1CsKICVvIG8Bq_byRmrgfktgpUbUs9_JH/view?usp=sharing" rel="noopener noreferrer" target="_blank">Chemistry</a></li>
  <li><a href="https://drive.google.com/file/d/1OzNk1ttjT2lJ8YnvbGxWh7tvvjARo_3s/view?usp=sharing" rel="noopener noreferrer" target="_blank">Biology</a></li>
  <li><a href="https://drive.google.com/file/d/12YjtE39nqSDCT_W9_yVk-Q-1JClXyD7t/view?usp=sharing" rel="noopener noreferrer" target="_blank">Maths-1</a></li>
  <li><a href="https://drive.google.com/file/d/1F4vllGzYc0I_zL2Z8dIPFqrHcjfL2uwA/view?usp=sharing" rel="noopener noreferrer" target="_blank"  >Maths-2</a></li>
 </ul>
      </div>
      <button type="button" onClick={toggleMode} className="btn btn-primary ms-3 my-3">{Head}</button>
    </div>
   </div>

   <div className="accordion-item" style={MyStyle}>
    <h2 className="accordion-header" id="headingTwo" style={MyStyle}>
      <button className="accordion-button collapsed" style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        HSC - COMMERCE
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
     
    
      <div class="nav-links mt-5 mb-5">
         <ul>
          <li><a href="https://drive.google.com/file/d/1203TKle7B-T37d2U7dENIrLWFa-kbkH7/view?usp=sharing" rel="noopener noreferrer" target="_blank">English</a></li>
          <li><a href="https://drive.google.com/file/d/15HwTOzZjtWP0dj3rCjwjkfUiFoUADtpU/view?usp=sharing" rel="noopener noreferrer" target="_blank">Marathi</a></li>
          <li><a href="https://drive.google.com/file/d/1KIpc_TX9dZ2PyUN-6HV-TyT_Z9JL1LXL/view?usp=sharing" rel="noopener noreferrer" target="_blank">IT</a></li>
          <li><a href="https://drive.google.com/file/d/15-ZfWaEoIGMy35vQtI0zaH8jl0_fhvtQ/view?usp=sharing" rel="noopener noreferrer" target="_blank">Maths 1</a></li>
          <li><a href="https://drive.google.com/file/d/16QmMqctX4HZA0OTZ5jLAE4gtBOmKnVXH/view?usp=sharing" rel="noopener noreferrer" target="_blank">Maths 2</a></li>
          <li><a href="https://drive.google.com/file/d/1pg_KMARGclUkjOmY1ktXvcpjQCSuzCBH/view?usp=sharing" rel="noopener noreferrer" target="_blank">Accounts</a></li>
          <li><a href="https://drive.google.com/file/d/1MrCSCDPaQX18vqpeXm_E7REIK0HWIExm/view?usp=sharing" rel="noopener noreferrer" target="_blank">OCM</a></li>
          <li><a href="https://drive.google.com/file/d/1llHJA9XjYh5m5eIMFmtTaZNwAvTTLNYU/view?usp=sharing" rel="noopener noreferrer" target="_blank">SP</a></li>
          <li><a href="https://drive.google.com/file/d/1UjlP4mSEgI6-5wIGwfpmdeYYtsifrZeJ/view?usp=sharing" rel="noopener noreferrer" target="_blank">Economics</a></li>
          <li><a href="https://drive.google.com/file/d/1nbQrJN2DUiuv283-a5UmlntGJehepVuS/view?usp=sharing" rel="noopener noreferrer" target="_blank">Environment</a></li>
         </ul>
        </div> 

      </div>
      <button type="button" onClick={toggleMode} className="btn btn-primary ms-3 my-3">{Head}</button>

    </div>
   </div>
  
   <div className="accordion-item" style={MyStyle}>
    <h2 className="accordion-header" id="headingThree" style={MyStyle}>
      <button className="accordion-button collapsed" style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        HSC - ARTS
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <div class="nav-links mt-5 mb-5">
         <ul>
          <li><a href="https://drive.google.com/file/d/1wKFJtYQoFY8qeRQxOJudddgQcTuUGeOe/view?usp=sharing"  rel="noopener noreferrer" target="_blank">History</a></li>
          <li><a href="https://drive.google.com/file/d/1ChEvG1_YpSuViq_YBwEND57VAX067JMp/view?usp=sharing"  rel="noopener noreferrer" target="_blank">Geography</a></li>
          <li><a href="https://drive.google.com/file/d/1lNZ7yzUlG34iVuDyz63wvYxzdAd1pdPP/view?usp=sharing"  rel="noopener noreferrer" target="_blank">Political Science</a></li>
          <li><a href="https://drive.google.com/file/d/1Xxt7R7SyYlG4ViAtU0UtGTUAOtiDej7u/view?usp=sharing"  rel="noopener noreferrer" target="_blank">Economics</a></li>
         </ul>
       </div>      </div>
      <button type="button" onClick={toggleMode} className="btn btn-primary ms-3 my-3">{Head}</button>
    </div>
   </div>
   
   <div className="accordion-item" style={MyStyle}>
    <h2 className="accordion-header" id="headingFour" style={MyStyle}>
      <button className="accordion-button collapsed" style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        SSC - ENGLISH
      </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <div class="nav-links mt-5 mb-5">
         <ul>
         <li><a href="https://drive.google.com/file/d/1uhGTDvZBFFM0-c8wGCcsWTYu__b_uY3j/view?usp=sharing"   rel="noopener noreferrer" target="_blank">Hindi</a></li>
          <li><a href="https://drive.google.com/file/d/1N7XQoQJo22svn-z9vFWv2W426jFWdneS/view?usp=sharing"  rel="noopener noreferrer" target="_blank">English</a></li>
          <li><a href="https://drive.google.com/file/d/1BAP1b6in6GN27qnsqJnUonkyV2yJgDC1/view?usp=sharing"  rel="noopener noreferrer" target="_blank">Marathi</a></li>
          <li><a href="https://drive.google.com/file/d/1-3FWS394DjFw-OiFJrNKFVqAj6jtNTHN/view?usp=sharing"  rel="noopener noreferrer" target="_blank">History</a></li>
          <li><a href="https://drive.google.com/file/d/1QfKTgtLT3fyNbS6QamvVb3TUkZcpDJzP/view?usp=sharing"  rel="noopener noreferrer" target="_blank">Geography</a></li>
          <li><a href="https://drive.google.com/file/d/1jgW5sBijrtiBi1asWEnOGCGq53pfcP-U/view?usp=sharing"  rel="noopener noreferrer" target="_blank">Science-1</a></li>
          <li><a href="https://drive.google.com/file/d/1WWD66zg_VGxN8KXHDMW5BgiBtw6W8f7Z/view?usp=sharing"  rel="noopener noreferrer" target="_blank">Science-2</a></li>
          <li><a href="https://drive.google.com/file/d/1la8cIlQ51uLGtAICXcTsDOevPUHV6iph/view?usp=sharing"  rel="noopener noreferrer" target="_blank">Maths-1</a></li>
          <li><a href="https://drive.google.com/file/d/1DHpZc0Rtm2ozoc5VTrBlbfDq0k3gxpeB/view?usp=sharing"  rel="noopener noreferrer" target="_blank">Maths-2</a></li>
         </ul>
       </div>      
       </div>
      <button type="button" onClick={toggleMode} className="btn btn-primary ms-3 my-3">{Head}</button>
    </div>
   </div>

   <div className="accordion-item" style={MyStyle}>
    <h2 className="accordion-header" id="headingFive" style={MyStyle}>
      <button className="accordion-button collapsed" style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
        SSC - Hindi
      </button>
    </h2>
    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <div class="nav-links mt-5 mb-5">
         <ul>
         <li><a href="https://drive.google.com/file/d/1APYfDKvnMeYN3PAC_JzB9lTEtbjlvTRr/view?usp=sharing"   rel="noopener noreferrer" target="_blank">Hindi</a></li>
          <li><a href="https://drive.google.com/file/d/1hF5dNJOWOFkhaNOREA3lBCda5XeI8Pya/view?usp=sharing"  rel="noopener noreferrer" target="_blank">English</a></li>
          <li><a href="https://drive.google.com/file/d/1AQYeopESbXWffMX1I8f1hmfgNA3XjQU_/view?usp=sharing"  rel="noopener noreferrer" target="_blank">Defence Studies</a></li>
          <li><a href="https://drive.google.com/file/d/1eD2mE_GXhJbhlxIziV_EJaVPMrbpDfPm/view?usp=sharing"  rel="noopener noreferrer" target="_blank">Geography</a></li>
          <li><a href="https://drive.google.com/file/d/1Gnsn8NzGW9lzmz8yOyzK-eJtunoJOC2C/view?usp=sharing"  rel="noopener noreferrer" target="_blank">History and Political Science</a></li>
          <li><a href="https://drive.google.com/file/d/1AW8f9A9SAA-vWJAyRgqwfxQTpana0N6D/view?usp=sharing"  rel="noopener noreferrer" target="_blank">Self Developnment</a></li>
          <li><a href="https://drive.google.com/file/d/1vCdZfWa_ytisX7_P_9XqzQL4gxg8uiUC/view?usp=sharing"  rel="noopener noreferrer" target="_blank">Maths 1</a></li>
          <li><a href="https://drive.google.com/file/d/1gd1xkjoQhSyIa5w_Z2Z2LBNBD2AaFaY-/view?usp=sharing"  rel="noopener noreferrer" target="_blank">Maths 2</a></li>
          <li><a href="https://drive.google.com/file/d/1-NSv_s8-eVQkJ5dxSADp1zAgRamDtQhX/view?usp=sharing"  rel="noopener noreferrer" target="_blank">Science 1</a></li>
          <li><a href="https://drive.google.com/file/d/1JQxgsspDMvWIaKsL3b6ABXQG7lrVHTEs/view?usp=sharing"  rel="noopener noreferrer" target="_blank">Science 2</a></li>
         </ul>
       </div>      
       </div>
      <button type="button" onClick={toggleMode} className="btn btn-primary ms-3 my-3">{Head}</button>
    </div>
   </div>

   <div className="accordion-item" style={MyStyle}>
    <h2 className="accordion-header" id="headingSix" style={MyStyle}>
      <button className="accordion-button collapsed" style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
        SSC - Marathi
      </button>
    </h2>
    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <div class="nav-links mt-5 mb-5">
         <ul>
         <li><a href="https://drive.google.com/file/d/1cGmhxIxaQV9vcsy3BccitHKze05VnSvo/view?usp=sharing"   rel="noopener noreferrer" target="_blank">Marathi</a></li>
          <li><a href="https://drive.google.com/file/d/1RJgupR5jM0FgQLWG39EF3GNLQWTN4FeM/view?usp=sharing"  rel="noopener noreferrer" target="_blank">Hindi</a></li>
          <li><a href="https://drive.google.com/file/d/1_y-VkgteAuRcB0VHVjJkux1InbQCYdJm/view?usp=sharing"  rel="noopener noreferrer" target="_blank">English</a></li>
          <li><a href="https://drive.google.com/file/d/1GT7lbDyNcDW9JMs5w1wJFWyUOIccRYfH/view?usp=sharing"  rel="noopener noreferrer" target="_blank">History</a></li>
          <li><a href="https://drive.google.com/file/d/1qXjhgqhLF93VQ3JhdYPt6Vgglz_-g6NN/view?usp=sharing"  rel="noopener noreferrer" target="_blank">Geography</a></li>
          <li><a href="https://drive.google.com/file/d/1ixq5DD1VrrDgUYGv1CbhZTCBuZtcqfk3/view?usp=sharing"  rel="noopener noreferrer" target="_blank">Science 1</a></li>
          <li><a href="https://drive.google.com/file/d/12GHJPVnSV4ldlWWkBMpZCVV2lBA3S024/view?usp=sharing"  rel="noopener noreferrer" target="_blank">Science 2</a></li>
          <li><a href="https://drive.google.com/file/d/1-CsrR9Q2ynLraXRt2-nRbvL0WgIbD_Eb/view?usp=sharing"  rel="noopener noreferrer" target="_blank">Maths 1</a></li>
          <li><a href="https://drive.google.com/file/d/18KrRRV9F9ATveW28RlBzBOk0PFIBZXVR/view?usp=sharing"  rel="noopener noreferrer" target="_blank">Maths 2</a></li>
         </ul>
       </div>      
       </div>
      <button type="button" onClick={toggleMode} className="btn btn-primary ms-3 my-3">{Head}</button>
    </div>
   </div>

  </div>
</div>
    )
}
export default About