import styled from "styled-components";

export const Container = styled.div`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  div {
    padding: 0.25rem;
    background: #c7c5c5;
    border-radius: 0.25rem;
    margin-bottom: 10px;

    &:last-child {
      margin: 0;
    }
  }
`;

export const Label = styled.label`
  font-weight: 700;
  font-size: 1.1rem;
`;
