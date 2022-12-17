import React from "react";
import facebook from "../images/facebook.png"
import twitter from "../images/twitter.png"
import whatsapp from "../images/whatsapp.png"
import instragram from "../images/instragram.png"
import linkedin from "../images/linkedin.png"
import heart2 from "../images/heart2.jpg"
import Navbar from "./Navbar";
function About(){
    return(
        <div>
             <Navbar/>
        <section class="footer">         
        <br/><br/>
         <h1>Contact  Us</h1><br/><br/><br/>
        <p>email:xyz678@gmail.com<br/>
         phone Number1:7708397186<br/>
         phone Number2:9392825098</p><br/>
         <p>FAQs | Privacy policy | Terms & Conditions | Contact Us | Version 1.2.3 |
         Copyright@2022 AgricultureTrading.in,All rights are reserved </p>
          <br/><br/>
        <p>Follow us</p>
       <ul >
        <li><a href="https://facebook.com/about/"><img src={facebook} alt="facebook"/></a></li> 
        <li><a href="https://twitter.com/about/"><img src={twitter} alt="twitter"/></a></li>
        <li><a href="https://whatsapp.com/about/"><img src={whatsapp} alt="whatsapp "/></a></li>
        <li><a href="https://instagram.com/about/"><img src={instragram} alt="instagram"/></a></li>
      <li><a href="https://linkedIn.com/about/"><img src={linkedin} alt="linkedin"/></a></li>
     </ul><br/>
     <h5>Made with <sub><img id="heart" src={heart2}/></sub> by hafsa & srija</h5>
     <br/>
     </section>
     </div>
    );
}

export default About;
