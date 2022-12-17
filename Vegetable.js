import React from "react"
import Crop from "../components/Crop"
import tomato from "../images/tomato.jpg"
 import carrot from "../images/carrot.jpg"
import cabbage from "../images/cabbage.jpg"
import radish from "../images/radish.jpg"
import Brinjal from "../images/Brinjal.jpg"
import potato from "../images/potato2.jpg"
import Navbar from "./Navbar"

function Vegetable(props){



    return(
        <div>
        <Navbar />
        <h1>AGRICULTURE TRADING<br/><br/><h2 style={{color:"aqua"}}>Vegetables</h2></h1>
        <br/>
        <Crop url="tomato" name="Tomato" img={tomato}/>
        <Crop url="potato" name="Potato" img={potato}/>
        <Crop url="cabbage" name="Cabbage" img={cabbage}/>
        <Crop url="brinjal" name="Brinjal" img={Brinjal}/>
        <Crop url="carrot" name="Carrot" img={carrot}/>
        <Crop url="radish" name="Radish" img={radish}/>
        </div>
    );
}


export default Vegetable;
