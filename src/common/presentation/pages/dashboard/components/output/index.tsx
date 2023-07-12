// dependencies
import React from 'react';

// components
import { Container, Header, Title, Command, Content } from './styles';

// types
import { OutputProps } from './types';

export function Output(props: OutputProps) {
  const { children, command } = props;

  return (
    <Container>
      <Header>
        <Title>@terminal ~</Title>
        <Command>{command}</Command>
      </Header>

      <Content>{children}</Content>
    </Container>
  );
}
