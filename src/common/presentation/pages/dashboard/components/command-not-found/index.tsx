// dependencies
import React from 'react';

// components
import { Container, Text } from './styles';

// types
import { CommandNotFoundProps } from './types';

export function CommandNotFound(props: CommandNotFoundProps) {
  const { query } = props;

  return (
    <Container>
      <Text>command not found: {query}</Text>
    </Container>
  );
}
