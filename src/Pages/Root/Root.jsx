import { Outlet } from "react-router-dom";
import Navbar from "../SharedPages/Navbar";
import Footer from "../SharedPages/Footer";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { IoMoonSharp, IoSunnyOutline } from "react-icons/io5";

const Root = () => {
  const [darkMode, setDarkMode] = useState(false); // State to track the current theme

  useEffect(() => {
    let saveMode = localStorage.getItem("displayMode");
    if (!saveMode) {
      saveMode = "light";
      setDarkMode(false);
      localStorage.setItem("displayMode", saveMode);
    }
    setDarkMode(saveMode === "dark" ? true : false);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`${darkMode ? "dark" : "light "}`}>
      <div className="dark:bg-gray-700">
        <button
          onClick={() => {
            toggleTheme();
          }}
        >
          {darkMode ? <IoSunnyOutline /> : <IoMoonSharp />}
        </button>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Toaster />
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
