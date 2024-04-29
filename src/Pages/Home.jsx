import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../Components/Banner";
import ChooseUs from "../Components/ChooseUs";
import Review from "../Components/Review";
import TouristsSpots from "../Components/TouristsSpots";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false); // State to track the current theme

  const toggleTheme = () => {
    setDarkMode(!darkMode); // Toggle between dark and light mode
  };

  return (
    <div
      className={`px-2 sm:px-5 md:px-10 lg:px-14 mb-5 flex flex-col items-center ${
        darkMode ? "dark-theme" : "light-theme"
      }`}
    >
      <Helmet>
        <title>TravelGo | Home</title>
      </Helmet>

      {/* Sections */}
      <Banner></Banner>
      <TouristsSpots></TouristsSpots>
      <ChooseUs></ChooseUs>
      <Review></Review>

      {/* Theme toggle button */}
      <div>
        <label className="swap swap-rotate" onClick={toggleTheme}>
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            className="theme-controller"
            value="synthwave"
            checked={darkMode}
            onChange={() => {}} // To prevent warning since we're controlling checked manually
          />

          {/* sun icon */}
          <svg
            className={`swap-off fill-current w-8 h-8 text-${
              darkMode ? "white" : "black"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            {/* sun icon path */}
          </svg>

          {/* moon icon */}
          <svg
            className={`swap-on fill-current w-8 h-8 text-${
              darkMode ? "white" : "black"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            {/* moon icon path */}
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Home;
