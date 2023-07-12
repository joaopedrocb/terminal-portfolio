// dependencies
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.secondary_text};
`;
