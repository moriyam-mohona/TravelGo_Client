import { useLoaderData } from "react-router-dom";
import AllTouristSpotCard from "./AllTouristSpotCard";

const AllTouristSpot = () => {
  const allTouristSpots = useLoaderData();
  return (
    <div className="mb-14 w-full px-2 sm:px-5 md:px-10 lg:px-14">
      <h3 className="text-7xl font-bold text-[#008EC4] text-center">
        Popular Tourist Spot
      </h3>
      <div className="mt-20 mb-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:mx-auto">
        {allTouristSpots.map((allTouristSpot) => (
          <AllTouristSpotCard
            allTouristSpot={allTouristSpot}
            key={allTouristSpot._id}
          ></AllTouristSpotCard>
        ))}
      </div>
    </div>
  );
};

export default AllTouristSpot;
