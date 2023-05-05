import styled from "styled-components";

export const ListContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, minmax(15%, 160px));
  grid-gap: 22px;
  @media (max-width: 1116px) {
    grid-template-columns: repeat(auto-fit, minmax(15%, 160px));
  }
`;
