import { ConnectDragSource } from "react-dnd";

export interface DraggableModalBasePropsInterface {
    children?: React.ReactChildren;

    left: number;
    top: number;
}

export interface DraggableModalPropsInterface extends DraggableModalBasePropsInterface {
    id: string | number;
}

export interface DraggableModalPresentationPropsInterface 
    extends DraggableModalBasePropsInterface {
    isDragging: boolean;

    drag: ConnectDragSource;
}
