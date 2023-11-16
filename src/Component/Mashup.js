import React, { useState, useEffect } from "react";
import "../styles/Audiolist.css";
import { mashup } from "./Masuplist";
import {Musicplayer} from "./Musicplayer"

import { FaHeadphones, FaHeart, FaRegClock, FaRegHeart } from "react-icons/fa";
function Mashup() {
  const [songs, setSongs] = useState(mashup);
  const [song, setsong] = useState(mashup[0].song);
  const [image, setimage] = useState(mashup[0].imgsrc);
  const[currentsong, setcurrentsong] = useState(mashup[0].songName);
  const[songartist, setartist] = useState(mashup[0].Artist);

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
    mashup.forEach((song) => {
      if (song.id === id) {
        song.favourite = !song.favourite;
      }
    });
    
    setSongs([...songs]);
  };

  const setmainsong = (songsrc, imgsrc,songName,Artist) => {
    setsong(songsrc);
    setimage(imgsrc);
    setcurrentsong(songName);
    setartist(Artist);
  };
 

  return (
    <div className="audiolist">
      <h2 className="title">
        Songs List <span>{`${mashup.length} Songs`}</span>
      </h2>
      <div className="songcontainer">
        {mashup &&
          mashup.map((song, index) => (
            <div className="songs" key={song.songName}
            onClick={() => setmainsong(song.song, song.imgsrc,song.songName,song.Artist)}
            >
              <div className="count">
                {song.id <= 9 ? `0${index + 1}` : `${index + 1}`}
              </div>
              <div className="song">
                <div className="imgbox">
                  <img src={song?.imgsrc} alt="" />
                </div>
                <div className="section">
                  <p className="songname">
                    {song.songName}
                    <span className="singer">
                      {song.Artist ? song.Artist : "Unknown"}
                    </span>
                  </p>
                  <div className="hits">
                    <p className="hit">
                      <i>
                        <FaHeadphones />
                      </i>
                      {song.listen}
                    </p>
                    <p className="duration">
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
      <Musicplayer  mode={mode} changemode={changemode} song={song} imgsrc={image} songName={currentsong} Artist={songartist} setSongs={setSongs}/>
    </div>
  );
}

export { Mashup };

