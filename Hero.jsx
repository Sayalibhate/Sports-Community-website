import React from "react";

const Hero = () => {
  const [priceValue, setPriceValue] = React.useState(1000);
  const [selectedLocation, setSelectedLocation] = React.useState("");
  const [selectedSport, setSelectedSport] = React.useState("");

  const locations = [
    "Stratford, Ontario, Canada",
    "Doha, Qatar",
    "Multiple Cities, India",
    "Mumbai, Maharashtra, India",
    "Pune, Maharashtra",
    "New Delhi, India",
  ];

  const sports = [
    "Hockey, baseball, soccer, basketball",
    "Football, athletics, swimming",
    "Kabaddi",
    "Cricket",
    "Kho-Kho",
    "Tennis ball cricket",
  ];

  return (
    <div className="bg-black/20 h-full">
      <div className="h-full flex justify-center items-center p-4 bg-primary/10">
        <div className="container grid grid-cols-1 gap-4">
          <div className="text-white">
            <p data-aos="fade-up" className="text-sm">
              Welcome To Sport Connect 
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="font-bold text-3xl"
            >
              Search Your Interested Community 
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="space-y-4 bg-white rounded-md p-4 relative"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-3">
              <div>
                <label htmlFor="location" className="opacity-70">
                  Select Location 
                </label>
                <select
                  name="location"
                  id="location"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full bg-gray-100 my-2 rounded-full p-2"
                >
                  <option value="" disabled>Select a location</option>
                  {locations.map((location, index) => (
                    <option key={index} value={location}>{location}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="sport" className="opacity-70">
                  Select Sport
                </label>
                <select
                  name="sport"
                  id="sport"
                  value={selectedSport}
                  onChange={(e) => setSelectedSport(e.target.value)}
                  className="w-full bg-gray-100 my-2 rounded-full p-2"
                >
                  <option value="" disabled>Select a sport</option>
                  {sports.map((sport, index) => (
                    <option key={index} value={sport}>{sport}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="community-members" className="opacity-70 block">
                  <div className="w-full flex justify-between items-center">
                    <p> Community Members </p>
                    <p className="font-bold text-xl">MIN Members {priceValue}</p>
                  </div>
                </label>
                <div className="bg-gray-100 rounded-full p-2 flex items-center justify-center ">
                  <input
                    type="range"
                    name="community-members"
                    id="community-members"
                    className="appearance-none w-full bg-gradient-to-r from-primary to-secondary h-2 rounded-full my-2"
                    min="1000"
                    max="1000000"
                    value={priceValue}
                    step="10"
                    onChange={(e) => setPriceValue(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <button className="bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 px-4 py-2 rounded-full duration-200 absolute -bottom-5 left-1/2 -translate-x-1/2">
              Search Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
