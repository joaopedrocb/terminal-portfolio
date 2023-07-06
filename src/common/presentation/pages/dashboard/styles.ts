// dependencies
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Main = styled.main`
  position: relative;

  height: 100%;
  flex-grow: 1;

  padding-top: 80px;

  perspective: 100vw;
  background: linear-gradient(45deg, #e6e2df 80%, #c2c1bd 100%);
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;

  perspective: 100vw;
  list-style-type: none;

  animation: ${fadeIn} ease-in 1.5s;
`;

export const ListItemContainer = styled.li`
  position: relative;
  width: fit-content;

  cursor: pointer;

  transform: rotate3d(0, 1, 0, 45deg);
  transform-origin: left center;
  transform-style: preserve-3d;
  transition: transform 1.5s cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    color: transparent;
    -webkit-text-stroke: 0.5px black;

    transform: rotate3d(0, 1, 0, 25deg);
  }
`;

export const ListItem = styled.span`
  text-transform: uppercase;
  font-weight: 800;
  font-style: normal;
  font-stretch: ultra-expanded;
  font-size: 7vw;
  line-height: 0.9em;

  transition: color 0.5s, opacity 0.3s;

  cursor: pointer;
`;
