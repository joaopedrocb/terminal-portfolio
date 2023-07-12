// dependencies
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Data = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: flex-start;
  gap: 16px;
`;

export const Date = styled.span`
  color: ${({ theme }) => theme.tertiary_text};
  width: 150px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.primary_text};
  font-weight: 600;
`;

export const Description = styled.span`
  color ${({ theme }) => theme.secondary_text};
  width: 50%;
`;

export const Stack = styled.span`
  color: ${({ theme }) => theme.tertiary_text};
`;
