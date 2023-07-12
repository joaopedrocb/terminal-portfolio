// dependencies
import React from 'react';

// contexts
import { TextsContext } from '../../../../contexts';

// components
import {
  Container,
  Data,
  Date,
  InfoContainer,
  Title,
  Description,
  Stack,
} from './styles';

export function Experience() {
  const { texts } = React.useContext(TextsContext);

  return (
    <Container>
      <Data>
        <Date>2022 - {texts.experience.present}</Date>
        <InfoContainer>
          <Title>{texts.experience.first.title}</Title>
          <Description>{texts.experience.first.description}</Description>
          <Stack>{texts.experience.first.stack}</Stack>
        </InfoContainer>
      </Data>

      <Data>
        <Date>2021 - 2022</Date>
        <InfoContainer>
          <Title>{texts.experience.second.title}</Title>
          <Description>{texts.experience.second.description}</Description>
          <Stack>{texts.experience.second.stack}</Stack>
        </InfoContainer>
      </Data>

      <Data>
        <Date>2021 - 2022</Date>
        <InfoContainer>
          <Title>{texts.experience.third.title}</Title>
          <Description>{texts.experience.third.description}</Description>
          <Stack>{texts.experience.third.stack}</Stack>
        </InfoContainer>
      </Data>
    </Container>
  );
}
