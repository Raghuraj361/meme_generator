import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import React from "react";

function App() {

   

  return (
    <div >
      <h3>Meme Generator</h3>
     <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/edit' element={<Edit/>}/>
     </Routes>
    </div>
  );
}

export default App;
