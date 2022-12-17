import React from "react"
import Crop from "../components/Crop"
import sorgham from "../images/sorgham.jpg"
 import pearl_millet from "../images/pearl_millet.jpg"
import finger_millet from "../images/finger_millet.jpg"
import Navbar from "./Navbar"
function Millets(props){
    return(
        <div>
        <Navbar />
        <h1>AGRICULTURE TRADING<br/><h2 style={{color:"aqua"}}>Millets</h2></h1>
        <br/>
        <Crop className="imgpic" url="sorgham" name={<h1 style={{fontSize:"30px"}}>Sorgham</h1>} img={sorgham}/>
        <Crop  url="pearl millet" name={<h1 style={{fontSize:"30px"}}>Pearl millet</h1>} img={pearl_millet}/>
        <Crop  url="finger millet" name={<h1 style={{fontSize:"30px"}}>Finger millet</h1>} img={finger_millet}/>

        </div>
    );
}


export default Millets;
