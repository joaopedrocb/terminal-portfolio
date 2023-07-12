// dependencies
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Link = styled.a.attrs({
  target: '_blank',
})`
  text-decoration: none;
  color: ${({ theme }) => theme.tertiary_text};

  font-size: 1.5rem;

  @media screen and (max-width: 1920px) {
    font-size: 1rem;
  }

  :hover {
    text-decoration: underline;
  }
`;
