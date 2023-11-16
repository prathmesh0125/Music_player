import React from "react";
import "../styles/RightSide.css"
import {FaCrown,FaBell,FaRegHeart,FaSun,FaCogs} from "react-icons/fa"

function RightSide(props) {
  return <div className="rightSide" style={{background:props.mode==="dark"?"black":"rgb(22, 31, 51)"}}>
    <div className="gopro">
      <i><FaCrown/>
      <p>
        Go <span>Pro</span>

      </p>
      </i>
      <i><FaBell/></i>
      <i><FaRegHeart/></i>

    </div>
      <div className="profile">
      <i><FaSun/></i>
      <i><FaCogs/></i>

      <div className="profileimg"></div>
      
      </div>
  </div>;
}

export { RightSide };
