// dependencies
import React from 'react';
import { useDrop, XYCoord } from 'react-dnd'
import update from 'immutability-helper'

// types
import { DraggableObjectInterface } from '../../types';

export function useDraggableModal() {
    const [modals, setModals] = React.useState<{[key: string]: {
        top: number
        left: number
    }}>({
        a: { top: 250, left: 900 },
    });

    const addModals = React.useCallback((modal) => {
        const prevState = modals;

        const newState = {
            ...prevState,
            modal,
        }
        setModals(newState);
    }, [modals]);

    const moveBox = React.useCallback(
        (id: string, left: number, top: number) => {
            setModals(update(modals, {
                [id]: {$merge: { left, top }}
            }));
    }, [modals]);

    const [, drop] = useDrop(
        () => ({
            accept: 'modal',
            drop(modal: DraggableObjectInterface, monitor) {
                const delta = monitor.getDifferenceFromInitialOffset() as XYCoord;
                const left = Math.round(modal.left + delta.x);
                const top = Math.round(modal.top + delta.y);

                moveBox(modal.id, left, top);

                return undefined
        }}), [moveBox]);


    return {
        modals,

        addModals,
        drop,
    }
}

