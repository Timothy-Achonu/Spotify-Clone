import { AiOutlineHome } from "react-icons/ai";
import { SiBuzzfeed } from "react-icons/si";
import { BiNews } from "react-icons/bi";
import { BsBoxes } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { MdEvent } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { MdPeopleOutline } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";

const styles = {
    color: "#9f9ea1", 
    backgroundColor: "white", 
    // fontSize: "2rem"
}

const navlinksData = [
  {
    icon: <AiOutlineHome    />,
    text: "Home",
  },
  {
    icon: (
      <SiBuzzfeed
         />
    ),
    text: "Trends",
  },
  {
    icon: <BiNews  />,
    text: "Feed",
  },
  {
    icon: <BsBoxes />,
    text: "New and Notable",
  },
  {
    icon: <SlCalender />,
    text: "Release Calendar",
  },
  {
    icon: <MdEvent  />,
    text: "Events",
  },
  {
    icon: <MdFavoriteBorder  />,
    text: "Favorite Songs",
  },
  {
    icon: <MdPeopleOutline   />,
    text: "Artists",
  },
  {
    icon: <AiOutlineStar  />,
    text: "Albums",
  },
];

export default navlinksData;
