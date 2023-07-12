// dependencies
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Button = styled.button`
  text-decoration: none;
  color: ${({ theme }) => theme.tertiary_text};

  background: none;
  border: none;
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
  font-family: 'SourceCodePro', monospace;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 1920px) {
    font-size: 1rem;
  }
`;
