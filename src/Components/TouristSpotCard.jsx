import { Link } from "react-router-dom";

const TouristSpotCard = ({ touristSpot }) => {
  const { image, touristsSpotName, countryName, averageCost } = touristSpot;
  return (
    <div
      // data-aos="zoom-in"
      // data-aos-delay="100"
      // data-aos-duration="1000"
      className="rounded-3xl p-5 card bg-base-100 border-2 border-[#008EC4] shadow-xl flex flex-col justify-between mx-1 mb-1"
    >
      <img
        src={image}
        className="object-cover object-center w-full h-60 mb-5 rounded-xl"
      />
      <div className="flex flex-col items-start justify-between w-full gap-2">
        <h2 className="text-2xl font-semibold">{touristsSpotName}</h2>
        <p className="font-light text-start">{countryName}</p>
        <div className="flex justify-between w-full">
          {/* <p className="text-xl text-red-500 flex gap-2 items-center"></p> */}
          <p className="text-xl font-medium">{averageCost}</p>
        </div>
      </div>
      <div className="mt-3 lg:mt-5">
        <Link>
          <button className="btn glass bg-[#008EC4] text-white px-6 py-2 rounded-full mt-1 lg:mt-3 text-lg font-medium">
            View Details →
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TouristSpotCard;
