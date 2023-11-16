import React,{useEffect,useState} from "react";
import "../styles/MainContainer.css";
import { Banner } from "./Banner";
import { AudioList } from "./AudioList";
import { Newlist } from "./Newlist";
import { Playlist } from "./Playlist";
import { Mashup } from "./Mashup";

import { Routes, Route, Link} from "react-router-dom";


function MainContainer(props) {

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
  useEffect(() => {
    const allLi = document
        .querySelector(".maincontainer")
        .querySelectorAll("li");
      function changeMenuActive() {
        allLi.forEach((n) => n.classList.remove("active"));
        this.classList.add("active");
      }
      allLi.forEach((n) => n.addEventListener("click", changeMenuActive));
    }, []);
      return (
    <div className="maincontainer" style={{background: props.mode === "dark" ? "black":"#0b1320"}}>
      <div>
         <Banner mode={mode} changemode={changemode} />
      </div>
      <div className="menulist" style={{background: props.mode === "dark" ? "black":"#848484",borderBottom:props.mode === "dark" ? "1px solid cornflowerblue": " ",
       borderTop:props.mode === "dark" ? "1px solid cornflowerblue":" 1px solid red"}}>
        <ul>
          <li >
            <Link to="/" style={{color: props.mode === "dark" ? "white":"black"}}>All Songs</Link>
          </li>
          <li>
            <Link to="/Newlist" style={{color: props.mode === "dark" ? "white":"black"}}>Popular</Link>
          </li>
           <li>
           <Link to="/Playlist" style={{color: props.mode === "dark" ? "white":"black"}}>Playlist</Link>

          </li>
          {/*
          <li>
            <a href="#">Followers</a>
          </li>
          <li>
            <a href="#">About</a>
          </li> */}
        </ul>
        {/* <p style={{color: props.mode === "dark" ? "white":"black"}}>
          <i>
            <FaUsers />
          </i>
          12.3M
          <span style={{color: props.mode === "dark" ? "white":"black"}}>Followers</span>
        </p> */}
      </div>
      {/* <Newlist/> */}
      <Routes>
      <Route
          exact
          path="/"
          element={<AudioList mode={mode} changemode={changemode} /> }
        />
      <Route
          exact
          path="/Newlist"
          element={  <Newlist/>}
        />
      <Route
          exact
          path="/Playlist"
          element={  <Playlist/>}
        />
      <Route
          exact
          path="/Mashup"
          element={  <Mashup/>}
        />


      </Routes>

      {/* <AudioList/> */}
    </div>
  );
}

export { MainContainer };
