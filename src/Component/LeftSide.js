import React, { useState } from "react";
import "../styles/Leftside.css";
import { SiBeatsbydre } from "react-icons/si";
import { FaBars } from "react-icons/fa";
import { BiSearchAlt2 } from "react-icons/bi";
import { MenuList } from "./MenuList";
import { List } from "./List";
import { Songlist } from "./Songlist";

function LeftSide(props) {
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

  const [isopen, setisopen] = useState(false);

  const toggle = () => setisopen(!isopen);
  return (
    <div
      className="leftside"
      style={{
        background: props.mode === "dark" ? "black" : "rgb(22, 31, 51)",
        borderRight:
          props.mode === "dark" ? "2px solid white" : "2px solid black",
        width: isopen ? "270px" : "45px",
        zIndex: isopen ? "2" : "3",
        transition: "0.3s",
      }}
    >
      <div className="logo">
        <i style={{ display: isopen ? "block" : "none" }}>
          <SiBeatsbydre />
        </i>
        <h2
          style={{
            color: props.mode === "dark" ? "light" : "white",
            display: isopen ? "block" : "none",
          }}
        >
          Barebeat
        </h2>
        <i>
          <FaBars className="toggle" onClick={toggle} />
        </i>
      </div>

      <div className="searchbar" style={{ display: isopen ? "block" : "none" }}>
        <input
          type="text"
          name="text"
          placeholder="Search.."
          style={{
            background: props.mode === "dark" ? "white" : "black",
            color: props.mode === "dark" ? "black" : "white",
          }}
        />
        <i>
          <BiSearchAlt2 />
        </i>
      </div>

      <div
        className={`form-check form-switch" -${
          props.mode === "light" ? "dark" : "light"
          
        } `}
      >
        <input
          className="form-check-input bg-dark"
          type="checkbox"
          onClick={props.changemode}
        style={{marginTop: isopen ? "3px" : "33px"}}  
        />
        <label
          className="form-check-label"
          style={{
            color: props.mode === "dark" ? "white" : "black",
            display: isopen ? "flex" : "none",
          }}
        >
          {props.mode === "dark" ? "light mode" : "Dark mode"}
        </label>
      </div>
      <MenuList
        isopen={isopen}
        title={"Menu"}
        menuobject={List}
        mode={mode}
        changemode={changemode}
      />
      {/* <Trending/> */}
      <Songlist mode={mode} changemode={changemode} isopen={isopen} />
    </div>
  );
}

export { LeftSide };
