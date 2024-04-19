import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Home from "./Home/Home";
import Profile from "./Profile/Profile";
export default function Main() {
  const [display, setDisplay] = useState("profile");

  function changeDisplay(item) {
    setDisplay(item);
  }

  return (
    <div className="container-main">
      {/* <Template /> */}
      <div className="Navbar">
        <Navbar changeDisplay={changeDisplay} />
      </div>
      {display === "home" && (
        <>
          <Home />
        </>
      )}
      {display === "profile" && (
        <>
          <Profile />
        </>
      )}
    </div>
  );
}
