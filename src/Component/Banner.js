import React from "react";
import "../styles/Banner.css";
import { FaEllipsisH, FaHeadphones, FaCheck } from "react-icons/fa";

function Banner(props) {
  return (
    <div className="banner">
      <img src="bg2.png" alt="Loading is not found" className="baneer_img" />

      <div className="content">
        <div className="top">
          <p>
            Home <span>/popular Artist</span>
          </p>

          <i>
            <FaEllipsisH />
          </i>
        </div>
        <div className="artist">
          <div className="left">
            <div
              className="name"
              style={{ color: props.mode === "dark" ? "black" : "white" }}
            >
              <h1 style={{ color: props.mode === "dark" ? "black" : "white" }}>
                BareBeat
              </h1>
              <p>
              Immerse yourself in the rhythm of your favorite tunes with <b> Barebeat</b> <br />
              Elevate your listening experience on the go with <b> Barebeat</b>
              </p>
              <div className="buttons">
                <button>PLAY</button>
                <button>
                  <i>
                    <FaCheck />
                  </i>
                  FOLLOW
                </button>
              </div>
            </div>
          </div>
          <div className="right">
            <p>
              <i>
                <FaHeadphones />
              </i>
              35,543,534 <span>MonthlyListners</span>
            </p>
          </div>
        </div>
      </div>
      <div className="bottom"></div>
    </div>
  );
}

export { Banner };
