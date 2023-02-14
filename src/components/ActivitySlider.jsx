import React from "react";
// import swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import swiper navigation
import { Navigation, Pagination } from "swiper";

import "swiper/swiper-bundle.min.css";

// import card
import Card from "./Card";

function ActivitySlider({ data }) {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      breakpoints={{
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
    >
      {data.map((item, index) => {
        // destructure item

        const { title, name, date, image } = item;

        return (
          <SwiperSlide key={index}>
            <Card
              item={item}
              title={name}
              subtitle={date}
              detail2={title}
              image={image}
              textColor={"text-gray-600 xl"}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default ActivitySlider;
