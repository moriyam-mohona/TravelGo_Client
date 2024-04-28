import { Helmet } from "react-helmet-async";
// import Estates from "../../Components/Estates/Estates";
import Banner from "../Components/Banner";
import ChooseUs from "../Components/ChooseUs";
import Review from "../Components/Review";
import TouristsSpots from "../Components/TouristsSpots";
// import { useLoaderData } from "react-router-dom"

const Home = () => {
  // const estates = useLoaderData();
  return (
    <div className="px-2 sm:px-5 md:px-10 lg:px-14 mb-5 flex flex-col items-center">
      <Helmet>
        <title>TravelGo | Home</title>
      </Helmet>

      {/* Sections */}

      <Banner></Banner>
      <TouristsSpots></TouristsSpots>
      <ChooseUs></ChooseUs>
      <Review></Review>
    </div>
  );
};

export default Home;
