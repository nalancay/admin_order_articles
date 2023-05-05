import styled from "styled-components";

export const ArticleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ButtonText = styled.span`
  .buttonText {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 8px;
    margin-top: 1rem;
    margin-left: 1rem;
    text-decoration: none;
    color: rgb(162, 0, 146);

    &:hover {
      cursor: pointer;
    }
  }
`;
