"use client";

import { useState } from "react";
import Loader from "./components/loader";
import { getAgeData, getGenderData, getCountryData } from "./utils/getData";

export default function Home() {
  const [firstName, setFirstName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setAge(0);
    setGender("");
    setCountry("");
    setFirstName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const ageData = await getAgeData(firstName);
    if (ageData !== null) setAge(ageData);
    setLoading(false);
    
    const genderData = await getGenderData(firstName);
    setGender(genderData);
    const countryData = await getCountryData(firstName);
    setCountry(countryData);
  
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24 text-white bg-gray-800">
      <div className="w-full md:w-1/2 lg:w-1/3 bg-blue-600 p-4 md:p-8 rounded-xl">
        <h2 className="text-3xl md:text-5xl text-center font-bold">
          Guesss...
        </h2>
        <form
          className="flex flex-col md:flex-row mt-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            value={firstName}
            onChange={handleChange}
            className="capitalize py-2 px-4 border border-gray-300 rounded md:rounded-l focus:outline-none focus:border-blue-500 text-black flex-grow"
            placeholder="Enter your first name"
          />
          <button
            type="submit"
            className="py-2 mt-2 md:mt-0 md:ml-2 px-4 bg-blue-500 hover:bg-blue-600 font-bold rounded md:rounded-r focus:outline-none"
          >
            Guess
          </button>
        </form>
        <div className="mt-8 font-bold">
          {loading && <Loader />}
          {firstName && age !== 0 && (
            <p className="animate-pulse block py-4 px-8 bg-white text-black rounded-lg text-bold">
              <span className="capitalize">{firstName}</span> is {age} years old
            </p>
          )}
          {firstName && gender && (
            <p className="animate-pulse block py-4 px-8 bg-white text-black rounded-lg text-bold mt-8">
              <span className="capitalize">{firstName}</span> is {gender}
            </p>
          )}
          {firstName && country && (
            <p className="animate-pulse block py-4 px-8 bg-white text-black rounded-lg text-bold mt-8">
              <span className="capitalize">{firstName}</span> is from {country}
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
