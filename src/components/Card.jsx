import React from "react";

const Card = ({
  item,
  title,
  subtitle,
  detail1,
  detail2,
  image,
  textColor,
}) => {
  // destructure item
  //   const {
  //     id,
  //     title,
  //     price,
  //     description,
  //     thumbnail,
  //     rating,
  //     brand,
  //     discountPercentage,
  //   } = item;
  //   const finalPrice = (((100 - discountPercentage) / 100) * price).toFixed(2);
  return (
    <div className="min-h-[600px] md:min-h-[420px] flex flex-col justify-start  items-center mb-4 px-2 pb-2 cursor-pointer hover:scale-[110%] transition-all gap-y-4">
      {/* picture */}
      <div>
        <img className="h-[300px] w-[300px] object-cover" src={image} />
      </div>
      {/* text */}
      <div className="w-full flex flex-col gap-y-3 justify-between h-[200px] md:h-[150px] ">
        <div>
          <h1 className="text-md font-bold text-gray-400">{title}</h1>
          <p className="font-semibold text-gray-400">{subtitle}</p>
        </div>
        <div>
          {detail1 && <p className="font-semibold line-through">${detail1}</p>}
          <h1 className={`${textColor} font-bold`}>
            {textColor.includes("red") ? "$" : ""}
            {detail2}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
