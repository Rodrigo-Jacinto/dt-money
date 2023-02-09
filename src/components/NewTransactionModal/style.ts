import styled from "styled-components";
import { transparentize } from "polished";

export const Container = styled.form`
  h2 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: var(--text-title);
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    height: 4rem;
    color: var(--shape);
    background: var(--green);
    padding: 0 1.5rem;
    border: 0;
    margin-top: 1.5rem;
    font-size: 1rem;
    transition: filter 0.2s;
    font-weight: 600;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const ContainerTransactionButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: "green" | "red";
}

const colors = {
  green: "#33cc95",
  red: "#E52E4D",
};

export const RadioBox = styled.button<RadioBoxProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
  border: 1px solid #d7d7d7;

  background: ${(props) =>
    props.isActive
      ? transparentize(0.9, colors[props.activeColor])
      : "transparent"};
      
  padding: 1rem;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  img {
    display: inline-block;
    margin-right: 1.2rem;
  }

  span {
    font-size: 1rem;
    color: var(--text-title);
  }
`;
