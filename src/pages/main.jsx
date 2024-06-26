import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Home from "./Home/Home";
import Profile from "./Profile/Profile";
import History from "./History/History";
export default function Main() {
  const [display, setDisplay] = useState("home");

  function changeDisplay(item) {
    setDisplay(item);
  }

  return (
    <div className="container-main">
      <div className="Navbar">
        <Navbar changeDisplay={changeDisplay} />
      </div>
      {display === "home" && (
        <>
          <Home changeDisplay={changeDisplay}/>
        </>
      )}
      {display === "profile" && (
        <>
          <Profile />
        </>
      )}
      {display === "history" && (
        <>
          <History />
        </>
      )}
    </div>
  );
}

