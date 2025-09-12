"use client";

import { Card, FlagImage, Info } from "./CountryCard.styled";

interface CountryCardProps {
  countryURL: string;
  countryName: string;
  countryPopulation: string;
  countryRegion: string;
  countryCapital: string;
}

export default function CountryCard({
  countryURL,
  countryName,
  countryPopulation,
  countryRegion,
  countryCapital,
}: CountryCardProps) {
  return (
    <Card>
      <FlagImage src={countryURL} alt={`Flag of ${countryName}`} />
      <Info>
        <h2>{countryName}</h2>
        <p>
          <strong>Population: </strong>
          {countryPopulation}
        </p>
        <p>
          <strong>Region: </strong>
          {countryRegion}
        </p>
        <p>
          <strong>Capital: </strong>
          {countryCapital}
        </p>
      </Info>
    </Card>
  );
}
