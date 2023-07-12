// dependencies
import styled from 'styled-components';

export const Container = styled.div`
  height: fit-content;

  display: grid;
  grid-template-columns: auto 1fr;
  gap: 12px;

  input {
    all: unset;

    height: 20px;
    width: 100%;

    caret-color: ${({ theme }) => theme.secondary_text};
  }

  input,
  select,
  textarea {
    color: ${({ theme }) => theme.secondary_text};
    font-size: 1.5rem;

    @media screen and (max-width: 1920px) {
      font-size: 1rem;
    }
  }
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.primary_text};
  font-size: 1.5rem;

  @media screen and (max-width: 1920px) {
    font-size: 1rem;
  }
`;

export const Input = styled.input``;

export const FakeButton = styled.button.attrs({
  type: 'submit',
})`
  visibility: hidden;
`;
