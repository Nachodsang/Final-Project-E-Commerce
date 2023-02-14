import React from "react";
import ActivitySlider from "./ActivitySlider";
// import data
import { activities } from "../assets/data/data";

const Activities = () => {
  const { list } = activities;
  return (
    <section className="w-full  my-6">
      <div className="frame block">
        {/* text */}

        {/* title */}
        <div>
          <h1 className="text-center my-4 text-4xl uppercase italic font-bold">
            #snap and share
          </h1>
        </div>
        {/* slider */}

        <ActivitySlider data={list} />
      </div>
    </section>
  );
};

export default Activities;
