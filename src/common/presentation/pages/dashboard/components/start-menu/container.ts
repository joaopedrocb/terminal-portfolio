// dependencies
import React from 'react';

// presentation
import { StartMenuPresentation } from './presentation';

export function StartMenu(props: any) {
    const { isActive } = props;

    return StartMenuPresentation({isActive});
}