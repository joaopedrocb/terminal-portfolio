// dependencies
import React from 'react';

// contexts
import { TextsContext } from '../../../../contexts';

// components
import { Container, Text } from './styles';

export function About() {
  const { texts } = React.useContext(TextsContext);

  return (
    <Container>
      <Text>{texts.about.first}</Text>

      <Text>{texts.about.second}</Text>

      <Text>{texts.about.third}</Text>
    </Container>
  );
}
