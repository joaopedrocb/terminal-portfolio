// dependencies
import React from 'react';

// contexts
import { TextsContext } from '../../../../contexts';

// components
import {
  Container,
  TextsContainer,
  HighlightedText,
  Text,
  Photo,
} from './styles';

export function HelloWorld() {
  const { texts } = React.useContext(TextsContext);

  return (
    <Container>
      <TextsContainer>
        <Text>{texts.helloWorld.title}</Text>

        <Text>=====</Text>

        <div>
          <Text>{texts.helloWorld.description.first}</Text>
          <HighlightedText>help </HighlightedText>
          <Text>{texts.helloWorld.description.second}</Text>
          <HighlightedText>commands.</HighlightedText>
        </div>
      </TextsContainer>

      <Photo />
    </Container>
  );
}
