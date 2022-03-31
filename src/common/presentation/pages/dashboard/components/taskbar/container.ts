// dependencies
import React from 'react';

// presentation
import { TaskBarPresentation } from './presentation';

export function TaskBar(props: any) {
    const { changeStartMenuIsActive, startMenuIsActive } = props;

    return TaskBarPresentation({
        changeStartMenuIsActive, 
        startMenuIsActive,
    });
}