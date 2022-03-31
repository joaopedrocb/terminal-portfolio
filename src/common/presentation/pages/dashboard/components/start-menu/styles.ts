// dependencies
import styled from 'styled-components';

export const Container = styled.div<{isActive: boolean}>`
    display: ${({isActive}) => !!isActive ? 'grid' : 'none'};
    position: absolute;
    bottom: -5px;
    left: 5px;
    
    grid-template-columns: 15% 1fr;
    width: 250px;
    height: 400px;
    
    border-left: 2px solid white;
    border-top: 2px solid white;
    border-bottom: 2px solid black;
    border-right: 2px solid black;

    background-color: #bfbfbf;
`;

export const WaterMark = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-right: 5px;
    padding-bottom: 10px;
    
    font-size: 25px;
    writing-mode: vertical-lr;
    
    background-color: #808080;
`;

export const Name = styled.span`
    margin-top: 5px;
    transform: rotate(180deg);

    color: #bfbfbf;
`

export const LastName = styled.span`
    transform: rotate(180deg);

    color: white;
`;

export const Content = styled.div`
    display: grid;
    grid-template-rows: 1fr 50px;
`;

export const Programs = styled.div`
    border-bottom: 1px solid #808080;
`;

export const Program = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;

    padding-top: 5px;
    padding-right: 10px;
    padding-bottom: 5px;
    padding-left: 15px;

    font-size: 12px;

    cursor: default;

    :hover {
        background-color: #070081;
        color: #ffffff;
    }
`;

export const Icon = styled.img`
    margin-right: 10px;
    /* width: 30px; */
`;

export const ShutDown = styled.div`
    border-top: 1px solid #ffffff;
`;