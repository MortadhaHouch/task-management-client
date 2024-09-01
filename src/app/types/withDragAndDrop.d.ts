declare module 'react-big-calendar/lib/addons/dragAndDrop/withDragAndDrop' {
    import { CalendarProps, withDragAndDropProps } from 'react-big-calendar';

    export default function withDragAndDrop<Props extends CalendarProps>(
        component: React.ComponentType<Props>
    ): React.ComponentType<Props & withDragAndDropProps>;
}