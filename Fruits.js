import React from "react"
import Crop from "../components/Crop"
import apple from "../images/apple.jpg"
 import custard from "../images/custard.jpg"
import watermelon from "../images/watermelon.jpg"
import oranges from "../images/oranges.jpg"
import guava from "../images/guava.jpg"
import grapes from "../images/grapes.jpg"
import Navbar from "./Navbar"

function Fruits(props){
    return(
        <div>
        <Navbar />
        <h1>AGRICULTURE TRADING<br/><br/><h2 style={{color:"aqua"}}>Fruits</h2></h1>
        <br/>
        <Crop url="apple" name="Apple" img={apple }/>
        <Crop url="grapes" name="Grapes" img={grapes}/>
        <Crop url="custard apple" name="Custard apple" img={custard}/>
        <Crop url="oranges" name="Oranges" img={oranges}/>
        <Crop url="watermelon" name="Watermelon" img={watermelon}/>
        <Crop url="guava" name="Guava" img={guava}/>
        </div>
    );
}
export default Fruits;
