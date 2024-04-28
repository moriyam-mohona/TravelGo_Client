import { Outlet } from "react-router-dom";
import Navbar from "../SharedPages/Navbar";
import Footer from "../SharedPages/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Toaster />
      <Footer></Footer>
    </div>
  );
};

export default Root;
