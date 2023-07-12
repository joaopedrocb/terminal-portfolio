// dependencies
import React from 'react';

// components
import {
  Find,
  About,
  Theme,
  Language,
  HelloWorld,
  Experience,
  CommandsList,
  CommandNotFound,
} from '../../components';

// enums
import { Commands } from '../../enums';

// types
import { UseCommandsProps } from './types';

export function useCommands(props: UseCommandsProps) {
  const { add, clear } = props;

  const commandsMap = {
    [Commands.HELLO_WORLD]: <HelloWorld />,
    [Commands.ABOUT]: <About />,
    [Commands.FIND]: <Find />,
    [Commands.EXPERIENCE]: <Experience />,
    [Commands.COMMANDS]: <CommandsList />,
    [Commands.HELP]: <CommandsList />,
    [Commands.THEME]: <Theme />,
    [Commands.LANGUAGE]: <Language />,
    [Commands.CLEAR]: undefined,
  };

  function triggerCommand(event: React.KeyboardEvent<HTMLInputElement>) {
    const eventTarget = event.target as HTMLInputElement;
    const { value } = eventTarget;

    if (value) {
      if (event.key === 'Enter') {
        if (value === Commands.CLEAR) {
          clear();
          return;
        }

        const commandsMapHasValue = Object.keys(commandsMap).some(
          (commandValue) => value === commandValue
        );

        if (!commandsMapHasValue) {
          add(<CommandNotFound query={value} />, value);
          return;
        }

        add(commandsMap[value], value);
      }
    }

    if (event.key === 'Tab') {
      if (eventTarget.value.length < 2) {
        event.preventDefault();
        return;
      }

      const completedString = Object.keys(commandsMap).filter((commandValue) =>
        commandValue.includes(eventTarget.value)
      );

      if (completedString[0]) eventTarget.value = completedString[0];

      event.preventDefault();
    }
  }

  return { triggerCommand };
}
