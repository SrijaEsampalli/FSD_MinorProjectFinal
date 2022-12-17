import React from "react";
import farmer3 from "../images/farmer3.jpg";
import Logo from "./Logo";
function Navbar(){
    return (
        <nav>
        <Logo img={farmer3} />
        <div class="nav-links" >
        <br/>
           <ul> 
            <li>
     </li>                   
                <li><a href="/Home" >HOME</a></li>
                <li><a href="/Farmerdet" >REGISTER</a></li>
                <li><a href="/About" >CONTACT</a></li>
           </ul>
        </div>
        
    </nav>
    );
}

export default Navbar;
