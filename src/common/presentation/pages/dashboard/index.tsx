// dependencies
import React from 'react';

// local components
import { Container, Main, List, ListItemContainer, ListItem } from './styles';

export function Dashboard(props: any) {
  return (
    <Container>
      <Main>
        <List>
          <ListItemContainer>
            <ListItem>Projeects</ListItem>
          </ListItemContainer>

          <ListItemContainer>
            <ListItem>Abbout</ListItem>
          </ListItemContainer>

          <ListItemContainer>
            <ListItem>ffind</ListItem>
          </ListItemContainer>

          <ListItemContainer>
            <ListItem>ski</ListItem>
            <ListItem style={{ fontFamily: 'stretchProBasicFont' }}>
              ll
            </ListItem>
            <ListItem>ss</ListItem>
          </ListItemContainer>
        </List>
      </Main>
    </Container>
  );
}
