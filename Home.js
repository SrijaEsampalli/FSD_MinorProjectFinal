import React from "react";
import Navbar from "./components/Navbar";
import Crop from "./components/Crop";
import cereal from "../src/images/cereal.jpg";
import millets from "../src/images/millets.jpg";
import vegetables from "../src/images/vegetables.jpg";
import fruits from "../src/images/fruits.jpg";
 import Cotton from "../src/images/Cotton.jpg";
 import pulses from "../src/images/pulses.jpg";
 import facebook from "../src/images/facebook.png"
import twitter from "../src/images/twitter.png"
import whatsapp from "../src/images/whatsapp.png"
import instragram from "../src/images/instragram.png"
import linkedin from "../src/images/linkedin.png"
import heart2 from "../src/images/heart2.jpg"

function Home(){     
    return(
        <div>
        <Navbar />
        <h1>AGRICULTURE TRADING</h1>
        <br/>
        <div>
        <Crop url="/Fruits" name="   Fruits" img={fruits}  />     
        <Crop url="/Commercial" name="Commercial  " img={Cotton}  />
        <Crop url="/vegetables" name="Vegetables" img={vegetables}  />
        <Crop url="/Cereals" name=" Cereals" img={cereal}  />
        <Crop url="/Pulses" name="    Pulses" img={pulses}  />
        <Crop url="/Millets" name="  Millets" img={millets}  />
        </div>

        <section class="footer">
        <br/><br/>
        <hr/>
         <br/><br/>
        <p>customer Service</p><br/>
        <p>email:xyz678@gmail.com<br/>
         phone Number1:7708397186<br/>
         phone Number2:9392825098</p><br/>
         <p>FAQs | Privacy policy | Terms & Conditions | Contact Us | Version 1.2.3 |
         Copyright@2022 DigitizedRtc.in,All rights are reserved </p>
          <br/><br/>
        <p>Follow us</p>
       <ul >
        <li><a href="https://facebook.com/about/"><img src={facebook} alt="paytm"/></a></li> 
        <li><a href="https://pay.google.com/about/"><img src={twitter} alt="phonepe"/></a></li>
        <li><a href="https://pay.google.com/about/"><img src={whatsapp} alt="Google pay"/></a></li>
           <li><a href="https://pay.google.com/about/"><img src={instragram} alt="paypal"/></a></li>
      <li><a href="https://pay.google.com/about/"><img src={linkedin} alt="paypal"/></a></li>
     </ul><br/>
     <h5>Made with <sub><img id="heart" src={heart2}/></sub> by hafsa/srija/vyshu</h5>
     <br/>
     </section>
        </div>
   
    );
}

export default Home;