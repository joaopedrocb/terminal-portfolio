// dependencies
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 8px;
`;

export const Header = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.primary_text};
`;

export const Command = styled.span`
  color: ${({ theme }) => theme.secondary_text};
`;

export const Content = styled.div`
  padding-left: 10px;
`;
