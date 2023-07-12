// dependencies
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 1rem;
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.secondary_text};
`;
