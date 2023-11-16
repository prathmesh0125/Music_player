import React, { useEffect, useState, useRef } from "react";

import "../styles/trending.css";
// import "../styles/Playlist.css";
// import { FaPlus } from "react-icons/fa";
// import { BiPlayCircle, BiPauseCircle } from "react-icons/bi";
import {Musicplayer} from "./Musicplayer"

// import { BiTrendingUp } from "react-icons/bi";
import { FaHeadphones, FaHeart, FaRegClock, FaRegHeart } from "react-icons/fa";

// import { BsMusicNoteList} from "react-icons/bs";

import { playlist } from "./Subplaylist";
// import { songs } from "./Songs";

function Playlist() {
  const [Songs, setSongs] = useState(playlist);
  const [song, setsong] = useState(playlist[0].song);
  const [image, setimage] = useState(playlist[0].imgsrc);
  const[currentsong, setcurrentsong] = useState(playlist[0].songName);
  const[songartist, setartist] = useState(playlist[0].Artist);

  const [mode, SetMode] = useState("#0b1320"); //whether dark mode is Enabel or not
  const audioplayer = useRef(); //audio tag
  // const progresbar = useRef(); //progress bar

  const changemode = () => {
    if (mode === "#0b1320") {
      SetMode("dark");
      document.body.style.backgroundColor = "#0b1320";
    } else {
      SetMode("#0b1320");
      document.body.style.backgroundColor = "black";
    }
  };

  useEffect(() => {}, [
    audioplayer?.current?.loadedmetadata,
    audioplayer?.current?.readyState,
  ]);
  useEffect(() => {
    const songs = document.querySelectorAll(".songs");
    function changeMenuActive() {
      songs.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    songs.forEach((n) => n.addEventListener("click", changeMenuActive));
  }, []);

  const changefavourite = (id) => {
    playlist.forEach((song) => {
      if (song.id === id) {
        song.favourite = !song.favourite;
      }
    });
    setSongs([...Songs]);
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
        Top <span>{`${playlist.length} Songs`}</span>
      </h2>
      <div className="songcontainer">
        {playlist &&
          playlist.map((song, index) => (
            <div className="songs" key={song.id}
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

export { Playlist };
