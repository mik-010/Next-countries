import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: var(--header-background, white);
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
`;

export const HeaderComponents = styled.div`
  max-width: 90rem;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-primary, #111);
`;
