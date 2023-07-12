// dependencies
import styled, { keyframes } from 'styled-components';

const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
`;

export const Container = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 7vw 16vw;

  background-image: linear-gradient(270deg, #91eae4, #86a8e7, #7f7fd5);
  background-size: 400% 400%;
  animation: ${gradient} 8s ease infinite;
`;

export const Outer = styled.div`
  display: flex;
  flex-grow: 1;
  max-width: 1700px;

  border-radius: 30px;
  border: 1px solid #72707d;

  overflow: hidden;
`;

export const Main = styled.main`
  position: relative;

  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 8px;
  padding: 20px;

  border-radius: 30px;

  background-color: ${({ theme }) => theme.editor_background};

  box-shadow: rgb(51, 62, 67, 0.2) 0px 0px 25px 1px;
  -webkit-box-shadow: 0px 0px 24px 8px rgb(51, 62, 67, 0.2);
  overflow-y: auto;

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
    z-index: 99;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
`;
