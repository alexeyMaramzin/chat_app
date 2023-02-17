import "./css/index.css";
import React from 'react';
import LeftSidebar from "./components/LeftSidebar";
import NomadList from "./components/NomadList";
import Chat from "./components/Chat";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App() {
  return (
   <div className="App">
       <Router>
           <LeftSidebar/>
           <NomadList/>
           <Routes>
               <Route path="/" element={<Chat/>}/>
               <Route path="/general" element={<Chat chat='general'/>}/>
               <Route path="/support" element={<Chat chat='support'/>}/>
               <Route path="/marketing" element={<Chat chat='marketing'/>}/>
               <Route path="/thailand" element={<Chat chat='thailand'/>}/>
               <Route path="/italy" element={<Chat chat='italy'/>}/>
               <Route path="/italy" element={<Chat chat='italy'/>}/>
               <Route path="*" element={<div style={{margin: '50px 0 0 100px', fontSize: '30px'}}>Not found</div>}/>
           </Routes>
       </Router>
   </div>
  );
}

export default App;
