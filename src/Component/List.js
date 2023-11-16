import { BsFillHouseFill, BsJournalAlbum } from "react-icons/bs";
import { FaBroadcastTower, FaMicrophoneAlt, FaPodcast } from "react-icons/fa";
import { BiPulse } from "react-icons/bi";

const List = [
  {
    id: 1,
    icon: <BsFillHouseFill />,
    name: "Home",
    // link:"Playlist"
  },
  {
    id: 2,
    icon: <BiPulse />,
    name: "Discover",
  },
  {
    id: 3,
    icon: <FaBroadcastTower />,
    name: "Radio",
  },
  {
    id: 4,
    icon: <FaMicrophoneAlt />,
    name: "Artist",
  },

  {
    id: 5,
    icon: <BsJournalAlbum />,
    name: "Album",
  },
  {
    id: 6,
    icon: <FaPodcast />,
    name: "Podcast",
  },
];
export { List };
