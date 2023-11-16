import React, { useState, useRef, useEffect } from "react";
import "../styles/Musicplayer.css";
// import {
//   BsVolumeOff,
//   BsVolumeDownFill,
// } from "react-icons/bs";
// import { songs } from "./Songs";
import {
  FaBackward,
  FaForward,
  FaVolumeUp,
  FaHeart,
  FaMusic,
  FaPause,
  FaPlay,
  FaRegHeart,
  FaShareAlt,
  FaStepBackward,
  FaStepForward,
} from "react-icons/fa";
import { BsDownload } from "react-icons/bs";

function Musicplayer({ song, imgsrc, songName, Artist,nextsong,prevsong}, props) {
  const [islike, setliked] = useState(false);
  const [isplay, setplay] = useState(false);
  const [duration, setduration] = useState(0);
  const [currentTime, setcurrentTime] = useState(0);
  // const [cursong, setcursong] = useState(songs[0]);
  const audioplayer = useRef(); //audio tag
  const progresBar = useRef(); //progress bar
  const animationRef = useRef(); //for animation
  useEffect(() => {
    const seconds = Math.floor(audioplayer.current.duration);
    setduration(seconds);
    var prevalue = isplay;
    if (isplay) {
      audioplayer.current.play();
      animationRef.current = requestAnimationFrame(whileplaying);
    } else {
      audioplayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
    setplay(prevalue);
    progresBar.current.max = seconds;
  }, [audioplayer?.current?.loadedmetadata, audioplayer?.current?.readyState]);
  
  
  const playsong = () => {
    var prevalue = isplay;
    if (!prevalue) {
      audioplayer.current.play();
      animationRef.current = requestAnimationFrame(whileplaying);
    } else {
      audioplayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
    setplay(!prevalue);
  };


  
  const calculateTime = (secs) => {
    const minute = Math.floor(secs / 60);
    const returnMin = minute < 10 ? `0${minute}` : `${minute}`;
    const second = Math.floor(secs % 60);
    const returnsec = second < 10 ? `0${second}` : `${second}`;

    return `${returnMin}:${returnsec}`;
  };

  const whileplaying = () => {
    progresBar.current.value = audioplayer.current.currentTime;
    changecurentTime();
    animationRef.current = requestAnimationFrame(whileplaying);
  };


  const changelike = () => {
    setliked(!islike);
  };

  const changeprogress = () => {
    audioplayer.current.currentTime = progresBar.current.value;
    changecurentTime();
    animationRef.current = requestAnimationFrame(whileplaying);

  };

  const changecurentTime = () => {
    progresBar.current.style.setProperty(
      "--player-played",
      `${(progresBar.current.value / duration) * 100}%`
    );
    setcurrentTime(progresBar.current.value);
    
  };

  const backward = () => {
    progresBar.current.value = Number(progresBar.current.value - 15);
    changeprogress();
  };
  const forward = () => {
    progresBar.current.value = Number(audioplayer.current.currentTime + 15);
    changeprogress();
  };

  // const skipback = () => {
    
  //   console.log("clicked");
  //   const index = songs.findIndex(x=> x.song === cursong.song);
  //   if (index === 0) {
  //     setcursong(songs[songs.length - 1]);
  //   } else {
  //     setcursong(songs[index - 1]);
  //   }
  //   console.log(index);
  //   setplay(song);
  //   audioplayer.current.currentTime = 0;
  // };
  // const skipnext = () => {
  //   console.log("clicked");
  //   const index = songs.findIndex(x=> x.song === cursong.song);
  //   if (index === songs.length-1) {
  //     setcursong(songs[0]);
  //   } else {
  //     setcursong(songs[index + 1]);
  //   }
  //   console.log(index);
  //   audioplayer.current.currentTime = 0;
  // };
  return (
    <div className="musicplayer">
      <div className="songimage">
        <img src={imgsrc} alt="Loading"/>
      </div>
      <div className="songattribute">
        <audio src={song} preload="matadata" ref={audioplayer} />
        <div className="top">
          <div className="wave" id="wave">
            <div
              className="wave1"
              style={{ background: props.mode === "dark" ? "black" : "white" }}
            ></div>
            <div
              className="wave1"
              style={{ background: props.mode === "dark" ? "black" : "white" }}
            ></div>
            <div
              className="wave1"
              style={{ background: props.mode === "dark" ? "black" : "white" }}
            ></div>
          </div>
          <h5
            id="title"
            style={{ color: props.mode === "dark" ? "black" : "white" }}
          >
            {songName}
            <div
              className="subtitle"
              style={{ color: props.mode === "dark" ? "black" : "white" }}
            >
              {" "}
              {Artist}
            </div>
          </h5>
          <div className="left">
            <div className="loved" onClick={changelike}>
              {islike ? (
                <i>
                  <FaHeart />
                </i>
              ) : (
                <i>
                  <FaRegHeart />
                </i>
              )}
            </div>
            <i
              className="mus"
              style={{ color: props.mode === "dark" ? "black" : "white" }}
            >
              <FaMusic />
            </i>
          </div>
          <div className="middle">
            <div className="back">
              <i>
                <FaStepBackward onClick={backward} />{" "}
              </i>
              <i onClick={prevsong}>
                <FaBackward />{" "}
              </i>
            </div>
            <div className="play" onClick={playsong}>
              {isplay ? (
                <i>
                  <FaPause />
                </i>
              ) : (
                <i>
                  <FaPlay />
                </i>
              )}
            </div>
            <div className="forward">
              <i>
                <FaForward onClick={nextsong} />
              </i>
              <i>
                <FaStepForward onClick={forward} />
              </i>
            </div>
          </div>
  
          <div className="right">
            <i>
              <BsDownload />
            </i>
            <FaShareAlt />
          </div>
        </div>
        <div className="bottom">
          
            <i
              style={{ color: props.mode === "dark" ? "black" : "white" }}
            // onChange={volumebtns}
            >
              <FaVolumeUp/>
             
            
            </i>
            <input
              type="range"
              min={0}
              max={100}
              // value={volume}
              // onChange={(e, v) => setvolume(v)}
            />
          
          <i>{/* <BsMusicNoteList /> */}</i>
          <div className="currenttime">{calculateTime(currentTime)}</div>
          <input
            type="range"
            className="progressbar"
            ref={progresBar}
            onChange={changeprogress}
            defaultValue="0"
            // style={{width:'50%'}}
          />
          {/* <div className="duration">{duration}</div> */}
          <div className="duration">
            {duration && !isNaN(duration) && calculateTime(duration)
              ? calculateTime(duration)
              : "00:00"}
          </div>
        </div>
      </div>
    </div>
  );
}

export { Musicplayer };
