import styled from "styled-components";

export const Card = styled.div`
  width: 18.75rem;
  border-radius: 0.3125rem;
  box-shadow: 0 0.125rem 0.3125rem rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 1.25rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-0.625rem);
  }
`;

export const FlagImage = styled.img`
  height: 10rem;
  width: 18.75rem;
  object-fit: cover;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem 2rem 4rem;
`;
