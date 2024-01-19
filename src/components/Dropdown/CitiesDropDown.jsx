import React, { useState } from "react";

const CitiesDropDown = () => {
  const countries = [
    { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
    { name: "Pak", value: "PK", cities: ["Lahore", "Karachi"] },
    { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] },
  ];

  
  const [selectedCountry, setSelectedCountry] = useState('')
  const [selectedCities, setSelectedCities] = useState('')

  const handleCountry = (e) => {
    setSelectedCountry(e.target.value)
    setSelectedCities('')
  }

  const handleCity = (e) => {
    setSelectedCities(e.target.value)
  }
  
  return (
    <div>
      <h3>Country Drop-Down</h3>

      <select value={selectedCountry} onChange={handleCountry}>
        <option value=''>Select...</option>
        {countries.map((country) => (
            <option key={country.value} value={country.value}>
                {country.name}
            </option>
        ))}
      </select>

      {selectedCountry && 
        <div>
            <h3>City Drop-Down</h3>
            <select value={selectedCities} onChange={handleCity}>
                <option value=''>Select...</option>
                {countries.find((country) => country.value === selectedCountry).cities.map((city) => (
                    <option key={city} value={city}>
                        {city}
                    </option>
                ))}
            </select>
        </div>
      }
    </div>
  );
};

export default CitiesDropDown;
