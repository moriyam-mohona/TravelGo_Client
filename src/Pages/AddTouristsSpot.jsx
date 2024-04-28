// import { useState } from "react";
import Swal from "sweetalert2";
// const Swal = require("sweetalert2");

function AddTouristsSpotForm() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const image = form.image.value;
    const touristsSpotName = form.touristsSpotName.value;
    const countryName = form.countryName.value;
    const location = form.location.value;
    const shortDescription = form.shortDescription.value;
    const averageCost = form.averageCost.value;
    const seasonality = form.seasonality.value;
    const travelTime = form.travelTime.value;
    const totalVisitors = form.totalVisitors.value;
    const userEmail = form.userEmail.value;
    const userName = form.userName.value;

    const newTouristSpot = {
      image,
      touristsSpotName,
      countryName,
      location,
      shortDescription,
      averageCost,
      seasonality,
      travelTime,
      totalVisitors,
      userEmail,
      userName,
    };
    console.log(newTouristSpot);

    //send data to the server
    fetch("http://localhost:5000/touristSpot", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTouristSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "User Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-3xl font-bold mb-4 mx-auto">Add Tourists Spot</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Image URL:</label>
          <input
            type="text"
            name="image"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block">Tourists Spot Name:</label>
          <input
            type="text"
            name="touristsSpotName"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="countryName" className="block">
            Country Name:
          </label>
          <select
            id="countryName"
            name="countryName"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            required
          >
            <option value="">Select a country</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Thailand">Thailand</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Vietnam">Vietnam</option>
            <option value="Cambodia">Cambodia</option>
          </select>
        </div>

        <div>
          <label className="block">Location:</label>
          <input
            type="text"
            name="location"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="block">Short Description:</label>
          <textarea
            id="short_description"
            name="shortDescription"
            rows="4"
            cols="50"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            required
          ></textarea>
        </div>

        <div>
          <label className="block">Average Cost:</label>
          <input
            type="text"
            name="averageCost"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block">Seasonality:</label>
          <input
            type="text"
            name="seasonality"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block">Travel Time:</label>
          <input
            type="text"
            name="travelTime"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block">Total Visitors Per Year:</label>
          <input
            type="text"
            name="totalVisitors"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block">User Email:</label>
          <input
            type="email"
            name="userEmail"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="block">User Name:</label>
          <input
            type="text"
            name="userName"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 btn "
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTouristsSpotForm;
