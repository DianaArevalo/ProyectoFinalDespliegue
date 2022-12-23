import React from 'react';
import {BrowserRouter , Route, Routes} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import RegisterProfesional from "./components/RegisterProfesional";
import Lessons from "./components/Lessons";
import PanelClients from "./components/PanelClients";
import PanelProfessional from './components/PanelProfessional';
import Reservation from "./components/Reservation";
import Logo from './components/logo';
// import Navbar from './components/Navbar';



function App() {

  return(
    <BrowserRouter>
    <Logo/>
    <Routes>
     
    <Route path="/" exact element={<Login/>}/>
     <Route path = "/registro" exact element= {<Register/>}/>
     <Route path = "/registerProfessional" exact element= {<RegisterProfesional/>}/>
     <Route path = "/panelClients" exact element= {<PanelClients/>}/>
     <Route path = "/Lessons" exact element= {<Lessons/>}/>
     <Route path = "/panelProfessional" exact element= {<PanelProfessional/>}/>
     <Route path = "/reservation" exact element= {<Reservation/>}/>
     {/* <Route path = "/menus" exact element= {<Navbar/>}/> */}

    </Routes>
</BrowserRouter>
  )
  }

export default App;
