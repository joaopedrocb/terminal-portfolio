// dependencies
import React from 'react';
import { ThemeProvider } from 'styled-components';

// style utilities
import { themes } from '../../styles/themes';

// types
import {
  ThemeContextInterface,
  ThemeContextProviderPropsInterface,
} from './types';

export const ThemeContext = React.createContext<ThemeContextInterface>({
  theme: themes.darkTheme,
  changeTheme: () => {},
});

export function ThemeContextProvider(
  props: ThemeContextProviderPropsInterface
) {
  const { children } = props;

  const [theme, setTheme] = React.useState(themes.darkTheme);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme: setTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
