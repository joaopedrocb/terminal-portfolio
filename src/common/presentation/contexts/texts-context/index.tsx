// dependencies
import React from 'react';

// style utilities
import { englishTexts } from '../../texts';

// types
import {
  TextsContextInterface,
  TextsContextProviderPropsInterface,
} from './types';

export const TextsContext = React.createContext<TextsContextInterface>({
  texts: englishTexts,
  changeTexts: () => {},
});

export function TextsContextProvider(
  props: TextsContextProviderPropsInterface
) {
  const { children } = props;

  const [texts, setTexts] = React.useState(englishTexts);

  return (
    <TextsContext.Provider value={{ texts, changeTexts: setTexts }}>
      {children}
    </TextsContext.Provider>
  );
}
