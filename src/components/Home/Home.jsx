import React from "react";
import "../../App.css";
import Sidebar from "./../Sidebar/Sidebar";
import MainDash from "../MainDash/MainDash";
import RightSide from "../RightSideComponent/RightSide";

const Home = () => {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainDash />
        <RightSide />
      </div>
    </div>
  );
};

export default Home;
