import React, { useState } from "react";
import './App.css';
import { LeftSide } from './Component/LeftSide';
import { MainContainer } from './Component/MainContainer';
import { RightSide } from './Component/RightSide';
// import LoadingBar from 'react-top-loading-bar'


function App(props) {
  // const [progress, setProgress] = useState(0);
  // const [progress, setProgress] = useState(0)

  const [mode, SetMode] = useState("#0b1320"); //whether dark mode is Enabel or not

  const changemode = () => {
    if (mode === "#0b1320") {
      SetMode("dark");
      document.body.style.backgroundColor = "#0b1320";
    } else {
      SetMode("#0b1320");
      document.body.style.backgroundColor = "black";
    }
  };

  return (
    <div className="App">

      <LeftSide mode={mode}  changemode={changemode}/>
      <MainContainer mode={mode} changemode={changemode}/>
      <RightSide mode={mode}changemode={changemode}/>
      
      <div className="background" style={{  color: props.mode === "dark" ? "black" : "white"}}> 
      </div>
    </div> 
  );
}

export default App;
