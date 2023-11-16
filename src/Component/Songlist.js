import React from "react";
import { BsTrash, BsMusicNoteList } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import "../styles/Playlist.css";
// import { Playlist } from "./Playlist";

// import { playlist } from "./Subplaylist";
// import { AudioList } from "./AudioList";

// import "../styles/RightSide.css"
import { Link } from "react-router-dom";

import { Subplaylist } from "./Subsonglist";
function Songlist(props) {
  return (
    <div className="playListContainer">
      <div
        className="namecontainer"
        style={{
          display: props.isopen ? "flex" : "none",
        }}
      >
        <p>playList</p>
        <i>
          <FaPlus />
        </i>
      </div>

      <div
        className="playlistscroll"
        style={{
          display: props.isopen ? "block" : "none",
        }}
      >
        {Subplaylist &&
          Subplaylist.map((list) => (
            <div className="playlist" key={list.id}>
              <i
                className="list"
                style={{ color: props.mode === "dark" ? "black" : "white" }}
              >
                <BsMusicNoteList />
              </i>

              <Link to={list.link}>
                {" "}
                <p style={{ color: props.mode === "dark" ? "black" : "white" }}>
                  {list.name}
                </p>
              </Link>
              {/* <Link to="/AudioList">Popular</Link> */}
              <i
                className="trash"
                style={{ color: props.mode === "dark" ? "black" : "white" }}
              >
                <BsTrash />
              </i>
            </div>
          ))}
      </div>
      {/* <Routes>
      <Route
          exact
          path="/Playlist"
          element={<Playlist/>}
        />
      {/* <Route
          exact
          path="/Newlist"
          element={  <Newlist/>}
        /> */}

      {/* </Routes> */}
    </div>
  );
}

export { Songlist };
