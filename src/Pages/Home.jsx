// import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../Components/Banner";
import ChooseUs from "../Components/ChooseUs";
import Review from "../Components/Review";
import TouristsSpots from "../Components/TouristsSpots";
import Countrys from "../Components/Countrys";
// import { IoMoonSharp, IoSunnyOutline } from "react-icons/io5";

const Home = () => {
  return (
    <div className="px-2 sm:px-5 md:px-10 lg:px-14 mb-5 flex flex-col items-center">
      <Helmet>
        <title>TravelGo | Home</title>
      </Helmet>
      {/* Sections */}
      <Banner />
      <TouristsSpots />
      <Countrys></Countrys>
      <ChooseUs />
      <Review />
    </div>
  );
};

export default Home;
