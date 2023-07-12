// dependencies
import styled from 'styled-components';

// assets
import photo from '../../../../../../assets/images/photo.png';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

export const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.secondary_text};
`;

export const HighlightedText = styled(Text)`
  color ${({ theme }) => theme.tertiary_text};
`;

export const Photo = styled.img.attrs({ src: photo })`
  height: 90px;
  width: 85px;
`;
