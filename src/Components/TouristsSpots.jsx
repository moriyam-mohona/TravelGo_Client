import TouristSpotCard from "./TouristSpotCard";
import { useEffect, useState } from "react";

const TouristsSpots = () => {
  // const touristSpots = useLoaderData();
  const [touristSpot, setTouristSpot] = useState([]);

  useEffect(() => {
    fetch(
      "https://assignment-10-server-five-gamma.vercel.app/api/v1/touristSpot"
    )
      .then((res) => res.json())
      .then((data) => setTouristSpot(data));
  }, []);
  // console.log(touristSpots);

  return (
    <div className="mb-14 w-full">
      <h3 className="text-5xl font-bold text-[#008EC4] text-center">
        Popular Tourist Spot
      </h3>
      <div className="mt-20 mb-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:mx-auto">
        {touristSpot?.slice(0, 6).map((touristSpot) => (
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
