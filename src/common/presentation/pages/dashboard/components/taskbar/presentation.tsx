// dependencies
import React from 'react';

// local components
import {
    Container,
    WindowsButton,
    WindowsIcon,
    WindowsButtonText,
} from './styles';

export function TaskBarPresentation(props: any) {
    const {
        changeStartMenuIsActive, 
        startMenuIsActive,
    } = props;

    return (
        <>

        <Container >
            <WindowsButton
                onClick={changeStartMenuIsActive}
                isActive={startMenuIsActive}
            >
                <WindowsIcon/>
                
                <WindowsButtonText>Start</WindowsButtonText>
            </WindowsButton>
        </Container>
        </>
    )
}