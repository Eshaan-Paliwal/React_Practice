import './App.css';
import React, { useState } from 'react'
import AboutUs from './Component/AboutUs';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';

function App() {
  const [Mode,setMode]=useState("light");
  const togglMode=()=>{
    if (Mode==='light'){
      setMode('dark');
    }
    else{
      setMode('light');
    }
  }
  return (
    <>
    <body data-bs-theme={Mode}>
      <Navbar toggleMode={togglMode} Mode={Mode}/>
      <div className="container">
        <AboutUs Mode={Mode}/>
      </div>
      <Footer Mode={Mode}/>
    </body>
    
    </>
  );
}

export default App;
