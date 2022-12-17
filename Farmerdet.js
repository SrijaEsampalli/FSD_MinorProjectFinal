import React from "react";
import {useState} from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Farmerdet(){
    const navigate = useNavigate();
    const[listofRegisters,setlist]=useState([]);
    const[farmername,setName]=useState("");
    const[phone,setPhone]=useState(0);
    const[address,setAddress]=useState("");
    const[crop,setCrop]=useState("");
    const[quan,setQuan]=useState(0);
    const[cost,setCost]=useState(0);

const posted=()=>{
     
     Axios.post("http://localhost:5000/farm",{
         farmername:farmername,
         phone:phone,
     //  image:{data:Buffer,contentType:String},
         address:address,
         crop: crop,
         quan:quan,
          cost:cost
          })
          .then(res=>{         
             setlist([...listofRegisters,{ farmername:farmername,phone:phone, address:address, crop:crop, quan:quan,  cost:cost}])
             console.log(listofRegisters);           
          });
          navigate('/Home');
 }
 return(
     <div className="body">
        <Navbar/>
        <div className="center">
            <h2>Register</h2>
     <form ><br/><br/>
    
 <div className="txt_field">
<input onChange={(e)=>{setName(e.target.value)}} required={true} value={farmername} type="text"   name="farmername"  />
<span></span>
<label>Name</label>
</div>
 <div className="txt_field">
 <input onChange={(e)=>{setPhone(e.target.value)}} required={true}  value={phone} type="text"  name="phone" />
 <span></span>
 <label>Contact</label>
</div>
 <div className="txt_field">
      <input onChange={(e)=>{setAddress(e.target.value)}} required={true} value={address} type="text" name="address" ></input>
      <span></span>
      <label>Address</label>
</div>
     
 <div className="txt_field">
     <input onChange={(e)=>{setCrop(e.target.value)}}  required={true} value={crop} type="text"  name="crop"/>
     <span></span>
     <label>Crop</label>
</div>
 <div className="txt_field">
     <input onChange={(e)=>{setQuan(e.target.value)}}  required={true} value={quan}  type="number"  name="quan" />
     <span></span>
     <label>Quantity Available(kgs)</label>
</div>
 <div className="txt_field">
     <input onChange={(e)=>{setCost(e.target.value)}}  required={true} value={cost} type="number" name="cost"/>
     <span></span>
     <label>Cost</label>
</div>
      <button className="finalclick" onClick={() => posted()} >Submit</button>
      <br/><br/>
  </form>
  </div>
  </div>
 );
}


export default Farmerdet;