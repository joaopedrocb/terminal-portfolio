// dependencies
import React from 'react';

export interface CommandLineProps {
  query: string;
  inputRef: React.Ref<HTMLInputElement>;
  changeQuery(newValue: string): void;
  triggerCommand(event: React.KeyboardEvent<HTMLInputElement>): void;
}
