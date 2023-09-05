import styled from "styled-components";

export const CarouselStyles = styled.div`
  display: flex;
  column-gap: 1vw;
  overflow-x: clip;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;

  button {
    all: unset;
    background: gainsboro;
    color: black;
    padding: 5px 15px;
    cursor: pointer;
    margin-top: 10px;
    border-radius: 4px;
    border: 1px solid transparent;
  }

  button:hover {
    background: lightgray;
    border: 1px solid black;
  }
`;