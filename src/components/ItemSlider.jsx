import React from "react";
// import Link
import { Link } from "react-router-dom";

// import swiper
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
// import swiper navigation
import { Navigation, Pagination } from "swiper";

import "swiper/swiper-bundle.min.css";
// import component
import Card from "./Card";

const ItemSlider = ({ category }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 5,
        },
      }}
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
    >
      {category?.map((item, index) => {
        // destructure item
        const {
          id,
          title,
          price,
          description,
          thumbnail,
          rating,
          brand,
          discountPercentage,
        } = item;
        const finalPrice = (((100 - discountPercentage) / 100) * price).toFixed(
          2
        );
        return (
          <SwiperSlide key={item.id}>
            <Link to={`/product/${id}`}>
              <Card
                item={item}
                title={title}
                subtitle={brand}
                detail1={price}
                detail2={finalPrice}
                image={thumbnail}
                textColor={"text-red-500 text-2xl "}
              />
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ItemSlider;
