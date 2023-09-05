import { styled } from "styled-components";

export const ContainerStyles = styled.div`
display: flex;
justify-content: flex-start;
`;

export const FormStyles = styled.form`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-content: space-between;
  }

  label, input {
    margin: 0.2rem;
    padding: 0.2rem;
  }

  input {
    width: 300px;
  }

  input:focus {
    outline: none;
  }

  button {
    all: unset;
    align-self: flex-end;
    padding: 5px 10px;
    cursor: pointer;
    background: gainsboro;
    border: 1px solid transparent;
  }

  button:hover {
    background: lightgray;
    border: 1px solid black;
  }

  h2 {
    margin: 0.2rem;
    padding: 0.2rem;
  }
`;