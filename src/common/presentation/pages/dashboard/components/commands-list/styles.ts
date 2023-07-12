// dependencies
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  width: 50%;
  align-items: center;
  gap: 4px;

  @media screen and (max-width: 1024px) {
    width: 70%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Data = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: space-between;
`;

export const DataTitle = styled.span`
  color: ${({ theme }) => theme.tertiary_text};
`;

export const DataValue = styled.span`
  color ${({ theme }) => theme.secondary_text};
`;
