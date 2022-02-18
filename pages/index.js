import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

import HeaderBar from "../components/HeaderBar.js";
import { useState } from "react";
import { GiConsoleController } from "react-icons/gi";
import { useRouter } from "next/router";
// import People from '../public/People.svg';

export default function Home() {
  const router = useRouter();
  const [restaurantData, setRestaurantData] = useState({
    name: "",
    location: "",
    price: "",
    rating: "",
    reviews: "",
    picture: "",
  });

  function handleInputChange(e) {
    const inputField = e.target.name;
    const inputData = e.target.value;
    const tempData = restaurantData;
    tempData[inputField] = inputData;
    setRestaurantData(tempData);
    console.log(restaurantData);
  }

  async function handleAddRestaurant(e) {
    e.preventDefault();

    console.log("Handle Sumbit has been called!");
    console.log(restaurantData);

    const response = await fetch("/api/fetch_restaurants", {
      method: "POST",
      body: JSON.stringify(restaurantData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);

    router.push("/My_Restaurants");
  }

  return (
    <div className="w-screen h-screen bg-slate-600 flex flex-col justify-items-center align-middle">
      <HeaderBar />
      <div className="w-screen h-screen flex flex-col items-center justify-items-center">
        <div className="h-1/2   w-full m-auto p-auto text-white flex flex-row align-middle justify-items-center">
          <div className="w-1/2  h-full flex flex-col items-center ">
            <div className="h-2/3 w-full flex items-center justify-center font-sans text-6xl">
              Welcome to Social Eat.
            </div>
            <div className="h-1/6 w-2/3 flex items-center justify-center">
              The app where you and your friends can share your favorite
              restaurants. Add restaurants to your list, and see 
              where your friends and family want to go and find somewhere perfect to eat.
              Social Eat is ideal for chosing date locations, or finding somewhere to catch-up
              with friends.
              </div>
              <div className="h-1/6 w-full flex items-center justify-center">
                Use the form below to add a new restaurant to the list!
              </div>
            
          </div>
          <div className="w-1/2 h-full flex items-center justify-center">
            <div className="w-96 h-3/4 flex flex-col justify-evenly p-5 rounded-2xl shadow-lg m-5 bg-slate-300 py-6">
              <input
                type="text"
                className="rounded-2xl py-1 my-1 px-2 hover:shadow-lg"
                name="name"
                onChange={handleInputChange}
                placeholder="Restaurant Name..."
              />
              <input
                type="text"
                name="location"
                className="rounded-2xl py-1 my-1 px-2 hover:shadow-lg"
                onChange={handleInputChange}
                placeholder="Location..."
              />
              <input
                type="text"
                name="price"
                className="rounded-2xl py-1 my-1 px-2 hover:shadow-lg"
                onChange={handleInputChange}
                placeholder="Price..."
              />
              <input
                type="text"
                name="rating"
                className="rounded-2xl py-1 my-1 px-2 hover:shadow-lg"
                onChange={handleInputChange}
                placeholder="Rating..."
              />
              <input
                type="text"
                name="reviews"
                className="rounded-2xl py-1 my-1 px-2 hover:shadow-lg"
                onChange={handleInputChange}
                placeholder="Reviews..."
              />
              <input
                type="text"
                name="picture"
                className="rounded-2xl py-1 my-1 px-2 hover:shadow-lg"
                onChange={handleInputChange}
                placeholder="Photo URL..."
              />
              <button
                type="submit"
                onClick={handleAddRestaurant}
                className="rounded-2xl py-1 my-1 px-2 bg-blue-400 hover:shadow-lg"
                Submit
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-1/2 flex items-center justify-center ">
          {/* <People  className="w-48 object-cover" alt="people picture"/> */}
          <img
            className="w-2/3 object-cover"
            src="https://assets.website-files.com/5bff8886c3964a992e90d465/5c00621b7aefa4f9ee0f4303_wide-shot.svg"
          />
        </div>
      </div>
    </div>
  );
}
