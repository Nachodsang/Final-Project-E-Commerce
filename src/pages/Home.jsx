import React from "react";
// import components
import Hero from "../components/Hero";

import TopPicked from "../components/TopPicked";
import Campaign from "../components/Campaign";
// import Activities from "../components/Activities";
// import Sustainable from "../components/Sustainable";
import CategoryHero from "../components/CategoryHero";

const Home = ({ closeOverlay }) => {
  return (
    <div>
      <Hero closeOverlay={closeOverlay} />
      <CategoryHero />
      <TopPicked />
      <Campaign />
      {/* <Activities /> */}
      {/* <Sustainable /> */}
    </div>
  );
};

export default Home;
