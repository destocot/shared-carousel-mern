import styled from "styled-components";

export const ImageContainerStyles = styled.div`
  position: relative;

  h3 {
    position: absolute;
    top: 5px;
    left: 5px;
    margin: 0;
    background: rgba(0, 0, 0, 0.65);
    color: whitesmoke;
    padding: 2px 4px;
  }

  img {
    object-fit: cover;
    aspect-ratio: 3/2;
    width: 20vw;
    border: 2px solid black;
    cursor: pointer;
    border-radius: 4px;
  }

  img:hover {
    border: 4px solid black;
  }

  div {
    position: absolute;
    width: 20vw;
    aspect-ratio: 3/2;
    display: flex;
    top: 0;
    justify-content: center;
    align-items: center;
  }

  span {
    padding: 2px 4px;
    background: rgba(0, 0, 0, 0.65);
    color: white;
    text-align: center;
  }
`;