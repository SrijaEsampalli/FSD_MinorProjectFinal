import React from "react"
import Crop from "../components/Crop"
import redgram from "../images/redgram.jpg"
 import bengalgram from "../images/bengalgram.jpg"
import greengram from "../images/greengram.jpg"
import Navbar from "./Navbar"

function Pulses(props){

    return(
        <div>
        <Navbar />
        <h1>AGRICULTURE TRADING<br/><h2 style={{color:"aqua"}}>Millets</h2></h1>
        <br/>
        <Crop url="redgram" name="Redgram" img={redgram }/>
        <Crop url="greengram" name="Greengram" img={greengram}/>
        <Crop url="bengalgram" name="Bengalgram" img={bengalgram}/>

        </div>
    );
}


export default Pulses;
