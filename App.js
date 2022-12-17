import React from "react";
import {BrowserRouter ,Routes, Route } from "react-router-dom"
import Login from "./components/Login";
import Vegetable from "./components/Vegetable";
import Home from "./Home";
import Commercial from "./components/Commercial";
import Fruits from "./components/Fruits";
import Millets from "./components/Millets";
import Cereals from "./components/Cereals";
import Pulses from "./components/Pulses";
import Farmerdet from "./components/Farmerdet";
import Signup from "./components/Signup";
import CommonFarmers from "./AllFarmers/CommonFarmers";
import OneFarmer from "./AllFarmers/OneFarmer";
import Payment from "./components/Payment";
import Main from "./Main";
import About from "./components/About";

function App(){  
    return( <div>
        <BrowserRouter>      
        <Routes>
            <Route exact path="/" element={<Main/>}  ></Route>
            <Route exact path="/Login" element={<Login/>}  ></Route>
            <Route exact path="/About" element={<About/>}  ></Route>
            <Route exact path="/Home" element={<Home/>}></Route>
            <Route exact path="/vegetables" element={<Vegetable/>}></Route>
            <Route exact path="/vegetables/:cropname" element={<CommonFarmers/>}></Route>
            <Route exact path="/vegetables/:cropname/:farmphone" element={<OneFarmer/>}></Route>
            <Route exact path="/Commercial" element={<Commercial/>}></Route>
            <Route exact path="/Commercial/:cropname" element={<CommonFarmers/>}></Route>
            <Route exact path="/Commercial/:cropname/:farmphone" element={<OneFarmer/>}></Route>
            <Route exact path="/Fruits" element={<Fruits/>}></Route>
            <Route exact path="/Fruits/:cropname" element={<CommonFarmers/>}></Route>
            <Route exact path="/Fruits/:cropname/:farmphone" element={<OneFarmer/>}></Route>
            <Route exact path="/payment" element={<Payment/>}></Route>
            <Route exact path="/Millets" element={<Millets/>}></Route>
            <Route exact path="/Millets/:cropname" element={<CommonFarmers/>}></Route>
            <Route exact path="/Millets/:cropname/:farmphone" element={<OneFarmer/>}></Route>
            <Route exact path="/Cereals" element={<Cereals/>} ></Route>
            <Route exact path="/Cereals/:cropname" element={<CommonFarmers/>}></Route>
            <Route exact path="/Cereals/:cropname/:farmphone" element={<OneFarmer/>}></Route>
            <Route exact path="/Pulses" element={<Pulses/>}></Route>
            <Route exact path="/Pulses/:cropname" element={<CommonFarmers/>}></Route>
            <Route exact path="/Pulses/:cropname/:farmphone" element={<OneFarmer/>}></Route>
            <Route exact path="/Farmerdet" element={<Farmerdet/>}></Route>
            <Route exact path="/Signup" element={<Signup/>}></Route>        
        </Routes>
        </BrowserRouter>
        </div>
    );
}

export default App;