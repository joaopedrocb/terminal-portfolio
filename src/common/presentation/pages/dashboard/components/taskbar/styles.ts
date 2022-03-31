// dependencies
import styled, { css } from 'styled-components';

// assets
import windowsIcon from 'src/assets/icons/windows-95-icon.png';

export const Container = styled.footer`
    height: 40px;
    display: flex;
    padding: 5px;

    background-color: #bfbfbf;
`;

type Test = {
    isActive: boolean;
}

export const WindowsButton = styled.div<Test>`
    width: 100px;
    display: flex;
    padding: 2px;
    justify-content: center;

    border-left: 2px solid white;
    border-top: 2px solid white;
    border-bottom: 2px solid black;
    border-right: 2px solid black;

    ${({isActive}) => isActive && css`
        border-left: 2px solid black;
        border-top: 2px solid black;
        border-bottom: 2px solid white;
        border-right: 2px solid white;
    `}};

    background-color: #bfbfbf;

    span::selection,
    img::selection {
        background: none;
    }
`;

export const WindowsIcon = styled.img.attrs({
    src: windowsIcon,
})`
    margin-right: 5px;
`;

export const WindowsButtonText = styled.span`
    align-self: center;
    
    font-weight: 700;
    font-size: 10px;

    cursor: default;    
`;