import React, { useState, useEffect } from "react";
import "../styles/Audiolist.css";
import { Musicplayer } from "./Musicplayer";
import { songs } from "./Songs";

import { FaHeadphones, FaHeart, FaRegClock, FaRegHeart } from "react-icons/fa";
function AudioList(props) {
  const [Songs, setSongs] = useState(songs);
  const [curIndex, setcurIndex] = useState(null);
  const [song, setsong] = useState(songs[0].song);
  const [image, setimage] = useState(songs[0].imgsrc);
  const [currentsong, setcurrentsong] = useState(songs[0].songName);
  const [songartist, setartist] = useState(songs[0].Artist);

  const [mode, SetMode] = useState("#0b1320"); //whether dark mode is Enabel or not

  const nextsong = () => {
    console.log(curIndex);
    setcurIndex(curIndex + 1);
    setsong(songs[curIndex + 1]);

  };
  const prevsong = () => {
    console.log(curIndex);
    setcurIndex(curIndex - 1);
    setsong(songs[curIndex - 1]);
  };

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
    songs.forEach((song) => {
      if (song.id === id) {
        song.favourite = !song.favourite;
      }
    });
    setSongs([...Songs]);
  };

  const setmainsong = (songsrc, imgsrc, songName, Artist, index) => {
    setcurIndex(index);
    setsong(songsrc);
    setimage(imgsrc);
    setcurrentsong(songName);
    setartist(Artist);

  };

  return (
    <div className="audiolist">
      <h2 className="title">
        Songs List <span>{`${songs.length} Songs`}</span>
      </h2>
      <div className="songcontainer">
        {songs &&
          songs.map((song, index) => (
            <div
              className="songs"
              key={song.song}
              onClick={() =>
                setmainsong(song.song, song.imgsrc, song.songName, song.Artist)
              }
            >
              <div className="count">
                {song.id <= 9 ? `0${index + 1}` : `${index + 1}`}
              </div>
              <div className="song">
                <div className="imgbox">
                  <img src={song?.imgsrc} alt="" />
                </div>
                <div className="section">
                  <p
                    className="songname"
                    style={{ color: props.mode === "dark" ? "black" : "white" }}
                  >
                    {song.songName}
                    <span
                      className="singer"
                      style={{
                        color: props.mode === "dark" ? "black" : "white",
                      }}
                    >
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
      <Musicplayer
        mode={mode}
        changemode={changemode}
        song={song}
        imgsrc={image}
        songName={currentsong}
        Artist={songartist}
        setSongs={setSongs}
        curIndex={curIndex}
        nextsong={nextsong}
        prevsong={prevsong}
      />
    </div>
  );
}

export { AudioList };
