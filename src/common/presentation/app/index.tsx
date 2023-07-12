// dependencies
import React from 'react';

// pages
import { Dashboard } from '../pages';

// contexts
import { ThemeContextProvider, TextsContextProvider } from '../contexts';

export function App() {
  return (
    <ThemeContextProvider>
      <TextsContextProvider>
        <Dashboard />
      </TextsContextProvider>
    </ThemeContextProvider>
  );
}
