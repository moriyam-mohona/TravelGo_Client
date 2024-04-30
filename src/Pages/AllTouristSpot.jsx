import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllTouristSpotCard from "./AllTouristSpotCard";

const AllTouristSpot = () => {
  const allTouristSpots = useLoaderData();
  const [sortOrder, setSortOrder] = useState("Ascending");

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const sortedTouristSpots = [...allTouristSpots].sort((a, b) => {
    if (sortOrder === "Ascending") {
      return a.averageCost.localeCompare(b.averageCost);
    } else {
      return b.averageCost.localeCompare(a.averageCost);
    }
  });

  return (
    <div className="mb-14 w-full px-2 sm:px-5 md:px-10 lg:px-14">
      <h3 className="text-7xl font-bold text-[#008EC4] text-center">
        Popular Tourist Spot
      </h3>
      <select
        className="select select-info w-full max-w-xs"
        value={sortOrder}
        onChange={handleSortChange}
      >
        <option disabled>Select Sort Style By Average Cost</option>
        <option value="Ascending">Ascending</option>
        <option value="Descending">Descending</option>
      </select>
      <div className="mt-20 mb-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:mx-auto">
        {sortedTouristSpots.map((touristSpot) => (
          <AllTouristSpotCard
            allTouristSpot={touristSpot}
            key={touristSpot._id}
          ></AllTouristSpotCard>
        ))}
      </div>
    </div>
  );
};

export default AllTouristSpot;
