// dependencies
import React from 'react';

// local components
import { Container, Header, Commands, Main, Footer } from './styles';

// types
import { DraggableModalPresentationPropsInterface } from './types';

export function DraggableModalPresentation(props: DraggableModalPresentationPropsInterface) {
    const {
        children,
        
        left,
        top,

        isDragging,
        drag
    } = props;

    if (isDragging) return <div ref={drag}/>

    return (
        <div ref={drag} style={{ position: 'absolute', left, top }} >
            <Container >
                <Header/>

                <Commands></Commands>

                <Main>
                    {children}
                </Main>

                <Footer/>
            </Container>
        </div>
    )
}