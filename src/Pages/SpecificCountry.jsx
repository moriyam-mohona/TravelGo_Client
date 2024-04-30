import { useLoaderData, useParams } from "react-router-dom";
import TouristSpotCard from "../Components/TouristSpotCard";

const SpecificCountry = () => {
  const countries = useLoaderData();
  const { name } = useParams();
  //   console.log(countries);
  return (
    <div className="mb-14 w-full px-2 sm:px-5 md:px-10 lg:px-14">
      <h2>{name}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {countries.map((country, i) => (
          <TouristSpotCard key={i} touristSpot={country}></TouristSpotCard>
        ))}
      </div>
    </div>
  );
};

export default SpecificCountry;
