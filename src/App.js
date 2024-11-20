import './App.css';
import React, { useState } from 'react'
import AboutUs from './Component/AboutUs';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Alert from './Component/Alert';

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
      <Navbar toggleMode={togglMode} Mode={Mode}/>
      <Alert alert={alert}/>
      <div className="container">
        <AboutUs Mode={Mode}/>
      </div>
      <Footer Mode={Mode}/>
    </body>
    
    </>
  );
}

export default App;
