"use client";

import { useEffect, useState } from "react";
import CountryCard from "../CountryCard/CountryCard";
import Filter from "../Filters/Filters";
import { CountryListWrapper } from "./CountryList.styled";
import useDebounce from "../../hooks/Debounce";

interface Country {
  cca3: string;
  flags: { png: string };
  name: { common: string };
  population: number;
  region: string;
  capital?: string[];
}

export default function CountryList() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [error, setError] = useState<string>("");

  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const baseUrl = process.env.NEXT_PUBLIC_COUNTRIES_API;

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        if (!baseUrl) {
          throw new Error("API base URL is not defined");
        }

        let endpoint = `${baseUrl}/all?fields=name,flags,population,region,capital,cca3`;

        if (debouncedSearchTerm) {
          endpoint = `${baseUrl}/name/${debouncedSearchTerm}?fields=name,flags,population,region,capital,cca3`;
        } else if (selectedRegion) {
          endpoint = `${baseUrl}/region/${selectedRegion}?fields=name,flags,population,region,capital,cca3`;
        }

        const res = await fetch(endpoint);

        if (!res.ok) {
          throw new Error("Failed to fetch countries");
        }

        const data = await res.json();

        setCountries(Array.isArray(data) ? data : []);
        setError("");
      } catch (err: any) {
        setCountries([]);
        setError(err.message || "Unknown error occurred");
      }
    };

    fetchCountries();
  }, [debouncedSearchTerm, selectedRegion]);

  return (
    <>
      <Filter
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedRegion={selectedRegion}
        onRegionChange={setSelectedRegion}
      />

      {error ? (
        <p style={{ textAlign: "center", color: "red" }}>{error}</p>
      ) : (
        <CountryListWrapper>
          {countries.map((country) => (
            <CountryCard
              key={country.cca3}
              countryURL={country.flags?.png}
              countryName={country.name?.common}
              countryPopulation={country.population.toLocaleString()}
              countryRegion={country.region}
              countryCapital={country.capital?.[0] || "N/A"}
            />
          ))}
        </CountryListWrapper>
      )}
    </>
  );
}
