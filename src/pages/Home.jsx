import React from "react";
// import components
import Hero from "../components/Hero";

import TopPicked from "../components/TopPicked";
import Campaign from "../components/Campaign";
import Activities from "../components/Activities";
import Sustainable from "../components/Sustainable";

const Home = ({ closeOverlay }) => {
  return (
    <div className=" bg-gray-200/40 " onClick={closeOverlay}>
      <Hero />
      <TopPicked />
      <Campaign />
      <Activities />
      <Sustainable />
    </div>
  );
};

export default Home;
