"use client";

import { FilterContainer, SearchInput, RegionSelect } from "./Filters.styled";

type FilterProps = {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedRegion: string;
  onRegionChange: (value: string) => void;
};

export default function Filter({
  searchTerm,
  onSearchChange,
  selectedRegion,
  onRegionChange,
}: FilterProps) {
  return (
    <FilterContainer>
      <SearchInput
        type="text"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onSearchChange(e.target.value)
        }
      />
      <RegionSelect
        value={selectedRegion}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          onRegionChange(e.target.value)
        }
      >
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </RegionSelect>
    </FilterContainer>
  );
}
