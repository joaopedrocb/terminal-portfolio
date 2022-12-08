// dependencies
import { useDrag } from 'react-dnd'

// presentation
import { DraggableModalPresentation } from './presentation';

// types
import { DraggableModalPropsInterface } from './types';

export function DraggableModal(props: DraggableModalPropsInterface) {
    const {
        children,

        id,
        left,
        top,
    } = props;

    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'modal',
        item: { id, left, top },

        collect: (monitor) => ({isDragging: monitor.isDragging()})
    }), [id, left, top]);

    return DraggableModalPresentation({
        children,
        
        left,
        top,

        isDragging,
        drag,
    });
}