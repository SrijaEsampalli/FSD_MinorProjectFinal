import React from "react"
import Crop from "../components/Crop"
import maize from "../images/maize.jpg"
 import wheat from "../images/wheat.jpg"
import paddy_rice from "../images/paddy_rice.jpg"
import Navbar from "./Navbar"

function Cereals(props){
    return(
        <div>
        <Navbar />
        <h1>AGRICULTURE TRADING<br/><h2 style={{color:"aqua"}}>Millets</h2></h1>
        <br/>
        <Crop url="maize" name="Maize" img={maize }/>
        <Crop url="wheat" name="Wheat" img={wheat}/>
        <Crop url="paddy" name="Paddy" img={paddy_rice}/>
        </div>
    );
}
export default Cereals;
