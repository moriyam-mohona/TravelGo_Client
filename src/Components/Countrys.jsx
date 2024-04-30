import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Countrys = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://assignment-10-server-five-gamma.vercel.app/api/v1/countries")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div className="mt-12 mb-14">
      <h2 className="text-5xl font-bold text-[#008EC4] text-center mb-5 ">
        All Countries
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {countries.map((country) => (
          <div key={country._id} className="col-span-1 p-4 border-2">
            <Link to={`/countries/${country.countryName}`}>
              <img src={country.image} alt="" className="w-full h-48 " />
              <h3 className="text-3xl text-center font-medium my-4">
                {country.countryName}
              </h3>
              <p className="text-center">{country.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countrys;
