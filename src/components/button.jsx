import * as React from 'react'
import { useButton } from 'react-aria';
import classNames from 'classnames'

export default function Button(props) {
    let ref = React.useRef();
    let { buttonProps } = useButton(props, ref);
    let className = classNames(
        props.intent == 'primary'
            ? 'bg-primary'
            : "bg-secondary",
        'rounded-md',
        'p-1'
    );

    return (
        <button className={className} {...buttonProps} ref={ref}>
            {props.children}
        </button>
    );
}