import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";

const AllTouristSpotDetails = () => {
  const allTouristSpot = useLoaderData();
  const { _id } = useParams();
  const currentSpot = allTouristSpot.find((e) => e._id === _id);
  console.log(currentSpot);
  return (
    <div className="px-2 sm:px-5 md:px-10 lg:px-10">
      <Helmet>
        <title>TravelGo | AllTouristSpot Details</title>
      </Helmet>
      {currentSpot && (
        <div className="grid grid-cols-1 lg:grid-cols-5 rounded-xl px-4 lg:px-8 mb-16 lg:gap-8">
          <img
            src={currentSpot.image}
            className="rounded-xl h-64 lg:h-96 w-full  object-cover object-center mb-4 lg:mb-0 lg:col-span-3"
          />
          <div className="flex flex-col justify-between lg:col-span-2">
            <div>
              <h1 className="text-3xl  mb-3 font-bold">
                Tourist Spot : {currentSpot.touristsSpotName}
              </h1>
              <p className="mb-2 text-base lg:text-xl font-light">
                <span className=" font-bold">Country : </span>
                {currentSpot.countryName}
              </p>
              <p className="mb-2 text-base lg:text-xl font-light">
                <span className=" font-bold">Location : </span>
                {currentSpot.location}
              </p>
              <p className="mb-2 text-base lg:text-lg font-light">
                <span className=" font-bold">Details: </span>
                {currentSpot.shortDescription}
              </p>
              <p className="mb-2 text-base lg:text-lg font-light">
                <span className=" font-bold">Average Cost : </span>
                {currentSpot.averageCost}
              </p>
              <p className="mb-2 text-base lg:text-lg font-light">
                <span className=" font-bold">Total Visitors : </span>
                {currentSpot.totalVisitors}
              </p>
              <p className="mb-2 text-base lg:text-lg font-light">
                <span className=" font-bold">Best Season : </span>
                {currentSpot.seasonality}
              </p>
              <p className="mb-2 text-base lg:text-lg font-light">
                <span className=" font-bold">Travel Time : </span>
                {currentSpot.travelTime}
              </p>
              <p className="mb-2 text-base lg:text-lg font-light">
                <span className=" font-bold"> User Name : </span>
                {currentSpot.userName}
              </p>
              <p className="mb-2 text-base lg:text-lg font-light">
                <span className=" font-bold">User Email : </span>
                {currentSpot.userEmail}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllTouristSpotDetails;
