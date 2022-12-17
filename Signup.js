import React, { useState,useEffect } from "react"
import Axios from "axios"
import { useNavigate} from "react-router-dom";
function Signup() {       
      const navigate = useNavigate();
       const [username,setUser]=useState("");
       const [email,setEmail]=useState("");
       const [pass,setPass]=useState("");
       const [confirmpass,setConfirmpass]=useState("");

         const postdata=()=>{
                    Axios.post("http://localhost:5000/users",{
                      username:username,
                    email:email,
                    pass:pass,
                    confirmpass:confirmpass
                  }).then(res=>{
                        console.log("user added");
                         });                        
                         navigate('/Login');   
                         window.location.reload();           
         }
  return (
       <div className="body">
        <div className="center">
          <h1>Signup</h1>
          <form>
            <div className="txt_field">
              <input  onChange={(e)=>{setUser(e.target.value)}} required={true} value={username} type="text" name="username"/>
              <span></span>
              <label>Username</label>
            </div>
            <div className="txt_field">
              <input type="text" onChange={(e)=>{setEmail(e.target.value)}} value={email} required={true} name="email"/>
              <span></span>
              <label>Email</label>
            </div>
            <div className="txt_field">
              <input type="password" onChange={(e)=>{setPass(e.target.value)}} value={pass} required={true} name="pass"/>
              <span></span>
              <label>Password</label>
            </div>
            <div className="txt_field">
              <input type="password" onChange={(e)=>{setConfirmpass(e.target.value)}} value={confirmpass} required={true} name="confirmpass"/>
              <span></span>
              <label>Confirm password</label>
            </div>
            {/* <div class="pass">Forgot Password?</div> */}
           <button className="finalclick" onClick={()=>postdata()}  >SUBMIT</button>
                <div class="signup_link">
              Have an account? <a href="/Login">Login</a>
            </div>
          </form>
        </div>
        </div>

  );

}

export default Signup;


