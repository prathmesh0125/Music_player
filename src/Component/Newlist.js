import React, { useState, useEffect } from "react";
import "../styles/Audiolist.css";
import {Musicplayer} from "./Musicplayer"
import { music } from "./Newsong";


import { FaHeadphones, FaHeart, FaRegClock, FaRegHeart } from "react-icons/fa";
function Newlist(props) {
  const [Songs, setSongs] = useState(music);
  const [song, setsong] = useState(music[0].song);
  const [image, setimage] = useState(music[0].imgsrc);
  const[currentsong, setcurrentsong] = useState(music[0].songName);
  const[songartist, setartist] = useState(music[0].Artist);
  

  
// this is used for active class
  useEffect(() => {
    const songs = document.querySelectorAll(".songs");
    function changeMenuActive() {
        songs.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    songs.forEach((n) => n.addEventListener("click", changeMenuActive));
  }, []);

  const changefavourite = (id) => {
    music.forEach((song) => {
      if (song.id === id) {
        song.favourite = !song.favourite;
      }
    });
    setSongs([...Songs]);
  };

  const setmainsong = (songsrc, imgsrc,songName,Artist,) => {
    setsong(songsrc);
    setimage(imgsrc);
    setcurrentsong(songName);
    setartist(Artist);
  };
 

  return (
    <div className="audiolist">
      <h2 className="title">
        Songs List <span>{`${music.length} Songs`}</span>
      </h2>
      <div className="songcontainer">
        {music &&
          music.map((song, index) => (
            <div
            className="songs"
            key={song.imgsrc}
            onClick={() => setmainsong(song.song, song.imgsrc,song.songName,song.Artist,song.duration)}
          >
              <div className="count">
                {song.id <= 19 ? `0${index + 1}` : `${index + 1}`}
              </div>
              <div className="song">
                <div className="imgbox">
                  <img src={song?.imgsrc} alt="" />
                </div>
                <div className="section">
                  <p className="songname" style={{color: props.mode === "dark" ? "black":"white"}}>
                    {song.songName}
                    <span className="singer" style={{color: props.mode === "dark" ? "black":"white"}}>
                      {song.Artist ? song.Artist : "Unknown"}
                    </span>
                  </p>
                  <div className="hits">
                    <p className="hit" style={{color: props.mode === "dark" ? "black":"white"}} >
                      <i>
                        <FaHeadphones />
                      </i>
                      {song.listen}
                    </p>
                    <p className="duration" style={{color: props.mode === "dark" ? "black":"white"}}>
                      <i>
                        <FaRegClock />
                      </i>
                     {song.duration}
                    </p>

                    <div
                      className="favourite"
                      onClick={() => changefavourite(song?.id)}
                    >
                      {song?.favourite ? (
                        <i>
                          <FaHeart />
                        </i>
                      ) : (
                        <i>
                          <FaRegHeart />
                        </i>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <Musicplayer  song={song} imgsrc={image} songName={currentsong} Artist={songartist} setSongs={setSongs}/>
    </div>
  );
}

export { Newlist };
