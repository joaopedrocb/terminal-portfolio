// dependencies
import React from 'react';

// contexts
import { TextsContext } from '../../../../contexts';

// style utilities
import { englishTexts, portugueseTexts } from '../../../../texts';

// components
import { Container, Button } from './styles';

export function Language() {
  const { changeTexts } = React.useContext(TextsContext);

  return (
    <Container>
      <Button onClick={() => changeTexts(englishTexts)}>us</Button>
      <Button onClick={() => changeTexts(portugueseTexts)}>pt-BR</Button>
    </Container>
  );
}
