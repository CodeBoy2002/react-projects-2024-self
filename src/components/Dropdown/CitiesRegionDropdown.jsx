import React, { useState } from "react";

const CitiesRegionDropdown = () => {
  const countries = [
    {
      name: "India",
      value: "IN",
      regions: [
        { name: "North", cities: ["Delhi", "Jaipur"] },
        { name: "South", cities: ["Chennai", "Bangalore"] },
      ],
    },
    {
      name: "Pak",
      value: "PK",
      regions: [
        { name: "Punjab", cities: ["Lahore", "Islamabad"] },
        { name: "Sindh", cities: ["Karachi", "Hyderabad"] },
      ],
    },
    {
      name: "Bangladesh",
      value: "BG",
      regions: [
        { name: "Dhaka", cities: ["Dhaka", "Gazipur"] },
        { name: "Chittagong", cities: ["Chittagong", "Cox Bazar"] },
      ],
    },
  ];

  const [selectedCountries, setSelectedCountries] = useState('')
  const [selectedRegions, setSelectedRegions] = useState('')
  const [selectedCities, setSelectedCities] = useState('')

  const handleCountry = (e) => {
    setSelectedCountries(e.target.value)
    setSelectedRegions('')
  }

  const handleRegion = (e) => {
    setSelectedRegions(e.target.value)
    setSelectedCities('')
  }

  const handleCity = (e) => {
    setSelectedCities(e.target.value)
  }

  return <div>
    <h3>SELECT DROPDOWN</h3>

    <h5>COUNTRIES DROPDOWN</h5>
    <select value={selectedCountries} onChange={handleCountry}>
        <option value=''>Select...</option>
        {countries.map((country) => (
            <option key={country.value} value={country.value}>
                {country.name}
            </option>
        ))}
    </select>

    {selectedCountries && (
        <div>
            <h5>REGIONS DROPDOWN</h5>
            <select value={selectedRegions} onChange={handleRegion}>
                <option value=''>Select...</option>
                {countries.find((country) => country.value === selectedCountries).regions.map((region) => (
                    <>
                        <option key={region.name} value={region.name}>
                            {region.name}
                        </option>
                    </>
                ))}
            </select>
        </div>
    )}

    {selectedRegions && (
        <div>
            <h5>CITIES DROPDOWN</h5>
            <select value={selectedCities} onChange={handleCity}>
                <option value=''>Select...</option>
                {countries.find((country) => country.value === selectedCountries).regions.find((region) => region.name === selectedRegions).cities.map((city) => (
                    <option key={city} value={city}>
                        {city}
                    </option>
                ))}
            </select>
        </div>
    )}

    <p>
        Selected Country: {selectedCities}, Selected Region: {selectedRegions}, Selected City: {selectedCities}
    </p>
  </div>;
};

export default CitiesRegionDropdown;
