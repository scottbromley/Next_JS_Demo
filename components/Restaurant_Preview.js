import React from "react";
import Image from "next/image";

function Restaurant_Preview({ restaurantInfo }) {
  return (
    <div className="bg-slate-100 shadow-md rounded-md w-full h-52 mb-2 flex flex-row place-content-center">
      <div className="w-1/2 h-52 pb-4 m-4 flex flex-col justify-evenly">
        <div className="text-xl font-semibold p-0 m-0">{restaurantInfo.name}</div>
        <div className="text-lg text-slate-900 italic">{restaurantInfo.location}</div>
        <div className="text-yellow-600">{restaurantInfo.price}</div>
        <div>Average rating of {restaurantInfo.rating} stars</div>
        <div>{restaurantInfo.reviews} reviews</div>
      </div>
      <div className="w-1/2 h-52 mx-4 grid place-content-center">
        <img src={restaurantInfo.picture} className="h-48 rounded-md object-cover"/>
      </div>
    </div>
  );
}

export default Restaurant_Preview;
