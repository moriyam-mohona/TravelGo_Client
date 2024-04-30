import { Fade } from "react-awesome-reveal";
import { CiViewTimeline } from "react-icons/ci";
import { FaPeopleGroup } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AllTouristSpotCard = ({ allTouristSpot }) => {
  const {
    image,
    touristsSpotName,
    averageCost,
    _id,
    seasonality,
    travelTime,
    totalVisitors,
  } = allTouristSpot;
  return (
    <Fade cascade damping={0.1}>
      <div className="rounded-3xl p-5 card bg-base-100 border-2 border-[#008EC4] shadow-xl flex flex-col gap-1 justify-around mx-1 mb-1 w-full ">
        <img
          src={image}
          className="object-cover object-center w-full h-60 mb-5 rounded-xl"
        />
        <h2 className="text-2xl font-semibold">{touristsSpotName}</h2>
        <div className="flex  items-start justify-between w-full gap-2">
          <p className="font-normal text-lg">${averageCost}Per Person</p>
          <p className="flex items-center gap-1 font-normal text-lg">
            <CiViewTimeline />
            {travelTime}
          </p>
          <p className="flex items-center gap-1 font-normal">
            <FaPeopleGroup />
            {totalVisitors}
          </p>
        </div>
        <p className="flex items-center gap-1 font-normal"></p>
        <p className=""></p>
        <p className="text-lg font-normal ">
          <span className="font-semibold">Best Time For Visit :</span>{" "}
          {seasonality}
        </p>

        <Link
          to={`/allTouristsSpot/${_id}`}
          className="btn glass bg-[#008EC4] text-white px-6 py-2 rounded-full mt-1 lg:mt-3 text-lg font-medium flex item-center"
        >
          View Details →
        </Link>
      </div>
    </Fade>
  );
};

export default AllTouristSpotCard;
