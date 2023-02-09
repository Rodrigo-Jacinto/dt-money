import styled from "styled-components";

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
