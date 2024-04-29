import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const [spot, setSpot] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/touristSpot/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setSpot(data); // Update the spot state with the fetched data
      });
  }, [user]);

  return (
    <div className="mb-14 w-full px-2 sm:px-5 md:px-10 lg:px-14">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Spot Name</th>
            <th>Average Cost</th>
            <th>Seasonality</th>
          </tr>
        </thead>
        {spot?.map((t) => (
          <tbody key={t._id}>
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={t.image} alt="" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{t.touristsSpotName}</div>
                    <div className="text-sm opacity-90">{t.countryName}</div>
                  </div>
                </div>
              </td>
              <td>{t.averageCost}</td>
              <td>{t.seasonality}</td>
              <th>
                <button className="btn btn-ghost btn-xs">Update</button>
              </th>
              <th>
                <button className="btn btn-ghost btn-xs">Delete</button>
              </th>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default MyList;
