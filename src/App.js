import './App.css';
import React, { useState } from 'react'
import AboutUs from './Component/AboutUs';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Alert from './Component/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [alert,setalert]=useState(null);
  const showAlert=(message,type)=>{
    setalert({
      message:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null);
    },1500)
  }
  const [Mode,setMode]=useState("light");
  const togglMode=()=>{
    if (Mode==='light'){
      setMode('dark');
      showAlert('Dark mode enable','success');
    }
    else{
      setMode('light');
      showAlert('Light mode enable','success');
      
    }
  }
  return (
    <>
    
    <body data-bs-theme={Mode}>
    <Router>
      <Navbar toggleMode={togglMode} Mode={Mode}/>
      <Alert alert={alert}/>
      <div className="container">
      <Routes>
        <Route path="/about" element={<AboutUs Mode={Mode}/>} />
      </Routes>
      </div>
      <Footer Mode={Mode}/>
      </Router>
    </body>
    
    </>
  );
}

export default App;
