import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

import HeaderBar from "../components/HeaderBar.js";
import { useState } from "react";
import { GiConsoleController } from "react-icons/gi";
import { useRouter } from "next/router";

export default function Home() {

  const router = useRouter();
  const [restaurantData, setRestaurantData] = useState({name: '', location: '', price: '', rating: '', reviews:'', picture: ''});

  function handleInputChange(e){
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
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();
    console.log(data);

    router.push('/My_Restaurants')
  }


  return (
    <div className="w-screen h-screen flex flex-col justify-items-center">
      <HeaderBar />
      <div className="bg-slate-200 fixed top-20 left-6 right-6 bottom-6 rounded-md flex flex-col p-2 space-y-2 text-justify">
        Welcome to Social Eat!
        <input type="text" className="rounded-md" name="name" onChange={handleInputChange} placeholder="Restaurant Name..." />
        <input type="text" name="location" onChange={handleInputChange}  placeholder="Location..." />
        <input type="text" name="price" onChange={handleInputChange} placeholder="Price..." />
        <input type="text" name="rating" onChange={handleInputChange} placeholder="Rating..." />
        <input type="text" name="reviews" onChange={handleInputChange} placeholder="Reviews..." />
        <input type="text" name="picture" onChange={handleInputChange} placeholder="Photo URL..." />
        <button type="submit" onClick={handleAddRestaurant} className="bg-blue-400 rounded-md">
          Submit
        </button>
      </div>
    </div>
  );
}
