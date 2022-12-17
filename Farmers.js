import React from "react"
import {Link} from "react-router-dom"

function Farmers(props){
  return (
    <>
    <Link to={props.url}>
        <div className="farmer-box">
           <div >             
               <img className="photo" src={props.img} alt="farmer pic"   />         
                <div className="detail">
                        Name:{props.farmername}<br/>
                        Contact:{props.phone}<br/>
                        Address:{props.address}<br/>
                        Crop:{props.crop}<br/>
                        Quantity available in kgs:{props.quan}<br/>
                        Cost:{props.cost}<br/>
                </div>
        </div>
        </div>
        </Link>
    </>
  );
}

export default Farmers;