// dependencies
import React from 'react';

// hooks
import { useDraggableModal } from '../../hooks';

// local components
import { Container, Main } from './styles';

import { TaskBar, StartMenu, DraggableModal } from './components';

export function DashboardPresentation(props: any) {
    const { 
        startMenuIsActive,
        changeStartMenuIsActive,
    } = props;

    const {modals, drop} = useDraggableModal();

    return (
        <Container>
            <div style={({flexGrow: 1})} ref={drop}>
                <Main>
                    <StartMenu isActive={startMenuIsActive}/>
                        {Object.keys(modals).map((key) => {
                            const { left, top } = modals[key];
                                return (
                                    <DraggableModal
                                        key={key}
                                        id={key}
                                        left={left}
                                        top={top}></DraggableModal>)
                        })}
                </Main>
            </div>

            <TaskBar
                startMenuIsActive={startMenuIsActive}
                changeStartMenuIsActive={changeStartMenuIsActive}
            />
        </Container>
    )
}