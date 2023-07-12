// dependencies
import React from 'react';

// contexts
import { ThemeContext } from '../../../../contexts';

// style utilities
import { themes } from '../../../../styles';

// components
import { Container, Button } from './styles';

export function Theme() {
  const { changeTheme } = React.useContext(ThemeContext);

  return (
    <Container>
      <Button onClick={() => changeTheme(themes.lightTheme)}>light</Button>
      <Button onClick={() => changeTheme(themes.darkTheme)}>dark</Button>
    </Container>
  );
}
