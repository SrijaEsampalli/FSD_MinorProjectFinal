import React, {useState} from "react"
import { Link } from "react-router-dom"

function Crop(props){
    return( 
        <div className="crop">
       <Link to={props.url} > <pre  >         <img src={props.img} alt="crop type" /></pre></Link>
       <pre><h1 style={{position:"relative",textAlign:"justify"}} className="nameofcrop">     {props.name}</h1> </pre>          
        </div>       
    )
}
export default Crop;