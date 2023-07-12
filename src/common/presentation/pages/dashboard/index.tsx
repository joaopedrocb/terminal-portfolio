// dependencies
import React from 'react';

// components
import { CommandLine, Output } from './components';
import { Container, Outer, Main } from './styles';

// hooks
import { useCommands } from './hooks';

// enums
import { Commands } from './enums';

export function Dashboard() {
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    inputRef.current?.dispatchEvent(
      new KeyboardEvent('keydown', { bubbles: true, key: 'Enter' })
    );
  }, []);

  const [query, setQuery] = React.useState<string>(Commands.HELLO_WORLD);
  const [output, setOutput] = React.useState<React.ReactElement | null>(null);

  function addOutput(newOutput: React.ReactElement, previousCommand: string) {
    setOutput((previousOutput) => (
      <>
        {previousOutput}
        <Output command={previousCommand}>{newOutput}</Output>
      </>
    ));

    setQuery('');
  }

  function clearOutput() {
    setOutput(null);
    setQuery('');
  }

  const { triggerCommand } = useCommands({
    add: addOutput,
    clear: clearOutput,
  });

  return (
    <Container>
      <Outer>
        <Main>
          {output}

          <CommandLine
            query={query}
            inputRef={inputRef}
            changeQuery={setQuery}
            triggerCommand={triggerCommand}
          />
        </Main>
      </Outer>
    </Container>
  );
}
