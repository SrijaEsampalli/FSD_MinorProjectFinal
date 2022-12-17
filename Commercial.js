import React from "react"
import Crop from "../components/Crop"
import cotton2 from "../images/cotton2.jpg"
 import sugarcane from "../images/sugarcane.png"
import mustard from "../images/mustard.jpg"
import coffee from "../images/coffee-cherry.jpg"
import soyabean from "../images/soyabean.jpg"
import groundnut from "../images/groundnut.jpg"
import Navbar from "./Navbar"

function Commercial(props){

    return(
        <div>
        <Navbar />
        <h1>AGRICULTURE TRADING<br/><br/><h2 style={{color:"aqua"}}>Commercial Crops</h2></h1>
        <br/>
        <Crop url="cotton" name="Cotton" img={cotton2}/>
        <Crop url="coffee" name="Coffee Cherries" img={coffee}/>
        <Crop url="groundnut" name="Groundnut" img={groundnut}/>
        <Crop url="mustard" name="Mustard" img={mustard}/>
        <Crop url="soyabean" name="Soyabean" img={soyabean}/>
        <Crop url="suagarcane" name="Sugarcane" img={sugarcane}/>
        </div>
    );
}


export default Commercial;
