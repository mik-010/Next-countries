import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 90rem;
  margin: 0 auto;

  @media (max-width: 26.5625rem) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

export const SearchInput = styled.input`
  padding: 0.5rem 1rem;
  border: 0.0625rem solid #ccc;
  border-radius: 0.3125rem;
  width: 12.5rem;
`;

export const RegionSelect = styled.select`
  padding: 0.5rem 1rem;
  border: 0.0625rem solid #ccc;
  border-radius: 0.3125rem;
`;
