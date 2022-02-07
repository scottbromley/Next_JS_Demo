import React from "react";
import Image from "next/image";

function Restaurant_Preview({ restaurantInfo }) {
  return (
    <div className="bg-white shadow-md rounded-md w-full h-52 mb-2 flex flex-row place-content-center">
      <div className="w-1/2 h-52 m-4 flex flex-col">
        <div>{restaurantInfo.name}</div>
        <div>{restaurantInfo.location}</div>
        <div>{restaurantInfo.price}</div>
        <div>{restaurantInfo.rating}</div>
        <div>{restaurantInfo.reviews}</div>
      </div>
      <div className="w-1/2 h-52 mx-4 grid place-content-center">
        <img src={restaurantInfo.picture} className="h-48 object-cover"/>
      </div>
    </div>
  );
}

export default Restaurant_Preview;
