// dependencies
import React from 'react';

// contexts
import { TextsContext } from '../../../../contexts';

// components
import { Container, Data, DataTitle, DataValue } from './styles';

// enums
import { Commands } from '../../enums';

export function CommandsList() {
  const { texts } = React.useContext(TextsContext);

  const commandsDescriptions = {
    HELLO_WORLD: texts.commandsDescriptions.helloWorld,
    ABOUT: texts.commandsDescriptions.about,
    FIND: texts.commandsDescriptions.find,
    EXPERIENCE: texts.commandsDescriptions.experience,
    COMMANDS: texts.commandsDescriptions.commands,
    HELP: texts.commandsDescriptions.help,
    THEME: texts.commandsDescriptions.theme,
    LANGUAGE: texts.commandsDescriptions.language,
    CLEAR: texts.commandsDescriptions.clear,
  };

  const commandsList = Object.keys(Commands).map((command) => {
    return (
      <Data key={command}>
        <DataTitle>{Commands[command]}</DataTitle>
        <DataValue>
          {`->`} {commandsDescriptions[command]}
        </DataValue>
      </Data>
    );
  });

  return <Container>{commandsList}</Container>;
}
