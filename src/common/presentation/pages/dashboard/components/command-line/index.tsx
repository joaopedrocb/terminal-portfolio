// dependencies
import React from 'react';

// components
import { Container, Title, Input, FakeButton } from './styles';

// types
import { CommandLineProps } from './types';

export function CommandLine(props: CommandLineProps) {
  const { query, changeQuery, triggerCommand, inputRef } = props;

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const eventTarget = event.target as HTMLInputElement;

    changeQuery(eventTarget.value);
  }

  return (
    <Container>
      <Title>@terminal ~</Title>

      <Input
        ref={inputRef}
        autoFocus
        spellCheck={false}
        value={query}
        onChange={onChange}
        onKeyDown={triggerCommand}
        maxLength={30}
      />
      <FakeButton />
    </Container>
  );
}
