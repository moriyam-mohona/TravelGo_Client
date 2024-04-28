import { useLoaderData } from "react-router-dom";
import TouristSpotCard from "./TouristSpotCard";

const TouristsSpots = () => {
  const touristSpots = useLoaderData();

  return (
    <div className="mb-14 w-full">
      <h3 className="text-7xl font-bold text-[#008EC4] text-center">
        Popular Tourist Spot
      </h3>
      <div className="mt-20 mb-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:mx-auto">
        {touristSpots.slice(0, 6).map((touristSpot) => (
          <TouristSpotCard
            touristSpot={touristSpot}
            key={touristSpot._id}
          ></TouristSpotCard>
        ))}
      </div>
    </div>
  );
};

export default TouristsSpots;
