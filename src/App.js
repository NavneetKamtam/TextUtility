import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textfrom from './Components/Textfrom';
import Alert from './Components/Alert';

function App() {

  const [alert,setalert]=useState(null);

  const showalert = (message,type)=>{
    setalert({
      msg: message,
      type: type
    })
  }

  setTimeout(() => {
    setalert(null);
  }, 5000);

  const[dpmode,setmode]=useState('light')

  const togglemode=()=>{
    if (dpmode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor='rgb(10 19 42)';
      showalert("Dark Mode Enabled","success")
    } else {
      setmode('light');
      document.body.style.backgroundColor='white';
      showalert("Light Mode Enabled","success")
    }
  } 

  return (
    // <>
    // <Navbar title={"TextUtilities"} contact={9373141747} mode={dpmode} toggle={togglemode}/>
    // <Alert alert={alert} />
    // <Textfrom showalert={showalert} heading="Enter the Text for Conversion.." mode={dpmode}/>
    // {/* <About/> */}
    // </>
    <>
  <Navbar title={"TextUtilities"} contact={9373141747} mode={dpmode} toggle={togglemode}/>
  <Alert alert={alert} />
   <Routes>
    {/* <Route path='/' element=/> */}
    {/* <Route path='/' element={}/> */}
     <Route path='/' element={<Textfrom showalert={showalert} heading="Enter the Text for Conversion.." mode={dpmode}/>}/>
     <Route path='/about' element={<About/>}/>
   </Routes>
   </>
  );
}

export default App;
