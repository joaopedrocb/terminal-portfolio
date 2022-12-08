// dependencies
import styled, { css } from 'styled-components';

css`
    .modal-div {
        background-color: black;
    }
`;

export const Container = styled.div`
    min-width: 600px;
    min-height: 300px;

    display: flex;
    flex-direction: column;
    grid-row-gap: 3px;
    padding: 4px;
    background-color: #BFBFBF;

    border-left: 2px solid white;
    border-top: 2px solid white;
    border-bottom: 2px solid black;
    border-right: 2px solid black;
`;

export const Header = styled.header`
    display: flex;
    width: 100%;
    height: 20px;
    background-color: #0700C8;
`;

export const Commands = styled.div`
    width: 100%;
    height: 30px;

    padding-left: 5px;
    background:green;
`;

export const Main = styled.div`
    display: flex;
    flex-grow: 1;
    width: 100%;
    background-color: #ffffff;

    border-left: 2px solid black;
    border-top: 2px solid black;
    border-bottom: 2px solid white;
    border-right: 2px solid white;
`;

export const Footer = styled.footer`
    height: 25px;
    width: 100%;
`;