import React from "react"
import Farmers from "../components/Farmers";
import farmerpic from "../images/p11.png"
import Navbar from "../components/Navbar";
import tomato_farmer2 from "../images/tomato_farmer2.jpg";
import {useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import  Axios  from "axios";
 
function CommonFarmers(){
    const {cropname} =useParams();
         const[data,setData]=useState([])       
       
     useEffect(()=>{
      Axios.get('http://localhost:5000/farmers').then(res=>{console.log("data from api",res.data)
           setData(res.data)
    }).catch(err=> console.log(err))
      },[])
      const filteredData= data.filter(item=>{
       
        return item.crop=== cropname;
      });
        
  return (
    <div>
    <Navbar />
        <h1>AGRICULTURE TRADING<br/><br/><h2 style={{color:"aqua"}}>Farmers available</h2></h1><br/><br/>
       
        { filteredData.map((index)=>{    
          return(
            <>
          <Farmers key={index.id} url={index.phone} img={farmerpic} farmername={index.farmername}
           phone={index.phone} crop={index.crop} 
          address={index.address} quan={index.quan} cost={index.cost} /> 
         <br/>
          </>
      )})} 
       </div>
  );
}

export default CommonFarmers;