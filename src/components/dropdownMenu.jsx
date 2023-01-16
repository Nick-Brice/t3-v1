import * as React from 'react';
import {Item, useSelectState} from 'react-stately';
import {HiddenSelect, useSelect} from 'react-aria';
import Button from './button';
import ListBox from './listBox';
import Popover from './popover';

export default function Select(props) {
  // Create state based on the incoming props
  let state = useSelectState(props);

  // Get props for child elements from useSelect
  let ref = React.useRef();
  let triggerRef = React.useRef();
  let buttonRef = React.useRef();
  let {
    labelProps,
    triggerProps,
    valueProps,
    menuProps
  } = useSelect(props, state, ref);

  console.log({...labelProps})

  return (
    <div style={{ display: 'inline-block' }}>
      <div
       {...labelProps}
       >{props.label}</div>
      <HiddenSelect
        state={state}
        triggerRef={ref}
        label={props.label}
        name={props.name}
      />
      <Button
        {...triggerProps}
        buttonRef={ref}
        style={{ height: 30, fontSize: 14 }}
      >
        <span 
        {...valueProps}
        >
          {state.selectedItem
            ? state.selectedItem.rendered
            : 'Select an option'}
        </span>
        <span
          aria-hidden="true"
          style={{ paddingLeft: 5 }}
        >
          ▼
        </span>
      </Button>
      {state.isOpen &&
        (
          <Popover state={state} triggerRef={ref} placement="bottom start">
            <ListBox
              {...menuProps}
              state={state}
            />
          </Popover>
        )}
    </div>
  );
}