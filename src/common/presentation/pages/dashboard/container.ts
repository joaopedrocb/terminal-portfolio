// dependencies
import React from 'react';

// presentation
import { DashboardPresentation } from './presentation';

export function Dashboard(props: any) {

    const [startMenuIsActive, setStartMenuIsActive] = React.useState(false);

    function changeStartMenuIsActive() {
        setStartMenuIsActive((prevState) => !prevState);
    }

    return React.createElement( DashboardPresentation, {
        startMenuIsActive,
        changeStartMenuIsActive,
    })
}

