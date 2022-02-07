import React from "react";
import HeaderBar from "../components/HeaderBar";
import Restaurant_Preview from '../components/Restaurant_Preview';
import { MongoClient } from 'mongodb';


function My_Restaurants(props) {

  const restaurant_list = props.restaurants;


  return (
    <div className="w-screen h-screen flex flex-col justify-items-center bottom-0">
      <HeaderBar />
      <h1 className="text-cyan-500 p-2 font-cursive">My Liked Restaurants</h1>
      <div className="bg-slate-200 fixed top-24 left-2 right-2 bottom-2 rounded-md flex justify-center overflow-y-scroll">
        <div className="relative top-0 bottom-0 my-2 px-2 flex flex-col ">
            {restaurant_list.map((restaurant, index) => (
                <Restaurant_Preview key={index} restaurantInfo={restaurant}/>
            ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(){

    const client = await MongoClient.connect('mongodb+srv://scottbromley17:sailing1730@cluster0.knr96.mongodb.net/RestaurantsApp?retryWrites=true&w=majority');
    const db = client.db();
    const publicRestaurantsCollection = db.collection('publicRestaurantsCollection');

    const restaurantsList = await publicRestaurantsCollection.find().toArray();

    client.close();

    return {
        props: {
            restaurants: restaurantsList.map(restaurant => ({
                name: restaurant.name,
                location: restaurant.location,
                price: restaurant.price,
                rating: restaurant.rating,
                reviews: restaurant.reviews,
                picture: restaurant.picture,
                id: restaurant._id.toString(),
            }))
        }, 
        revalidate: 1, 
    }
}

export default My_Restaurants;
