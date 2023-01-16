import { useDatePicker } from 'react-aria';
import { useDatePickerState } from 'react-stately';
import Button from './button';
import Calendar from './calendar';
import Dialog from './'

// Reuse the DateField, Popover, Dialog, Calendar, and Button from your component library.
import {
    Button,
    Calendar,
    DateField,
    Dialog,
    Popover
} from 'your-component-library';

export default function DatePicker(props) {
    let state = useDatePickerState(props);
    let ref = React.useRef();
    let {
        groupProps,
        labelProps,
        fieldProps,
        buttonProps,
        dialogProps,
        calendarProps
    } = useDatePicker(props, state, ref);

    return (
        <div style={{ display: 'inline-flex', flexDirection: 'column' }}>
            <div {...labelProps}>{props.label}</div>
            <div {...groupProps} ref={ref} style={{ display: 'flex' }}>
                
                <Button {...buttonProps}>🗓</Button>
            </div>
            {state.isOpen &&
                (
                    <Popover state={state} triggerRef={ref} placement="bottom start">
                        <Dialog {...dialogProps}>
                            <Calendar {...calendarProps} />
                        </Dialog>
                    </Popover>
                )}
        </div>
    );
}