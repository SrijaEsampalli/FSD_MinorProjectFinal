import React, { useState,useEffect } from "react"
import { useNavigate} from "react-router-dom";
import  Axios  from "axios";
function Login() {   
    const navigate= useNavigate()
    const [username,setUser]=useState("");
    const [pass,setPass]=useState("");
    const[data,setData]=useState([])  
    useEffect(()=>{  
      Axios.get('http://localhost:5000/users').then(res=>{
           setData(res.data)
    }).catch(err=> console.log(err))
      },[])
      const filteredData= data.filter(member=>{
        
        return member.username===username && member.pass===pass
      });
   const check=()=>{
       if(filteredData.length===0){
        alert("User not exist");
        navigate("/Login")    
       }
   else {             
          alert("Login successfull") ;
          navigate("/Home")       
          } 
  }
  return (
       <div class="body">
        <div class="center">
          <h1>Login</h1>
          <form>
            <div class="txt_field">
              <input type="text" onChange={(e)=>{setUser(e.target.value)}}  value={username}required></input>
              <span></span>
              <label>Username</label>
            </div>
           
            <div class="txt_field">
              <input type="password" onChange={(e)=>{setPass(e.target.value)}} vale={pass} required></input>
              <span></span>
              <label>Password</label>
            </div>        
          <button onClick={()=>check()} className="finalclick"  >SUBMIT</button>
                <div class="signup_link">
              Not a member? <a href="/Signup">Signup</a>
            </div>
          </form>
        </div>
        </div>

  );

}

export default Login;


