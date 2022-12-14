import {
    mergeProps,
    useFocusRing,
    useGridList,
    useGridListItem
  } from 'react-aria';
  import {useListState} from 'react-stately';
  import {useRef} from 'react';
  
  export default function List(props) {
    let state = useListState(props);
    let ref = useRef();
    let { gridProps } = useGridList(props, state, ref);
  
    return (
      <ul {...gridProps} ref={ref} className="flex flex-col flex-grow gap-y-1 rounded-md border border-black">
        {[...state.collection].map((item) => (
          <ListItem key={item.key} item={item} state={state} />
        ))}
      </ul>
    );
  }
  
  function ListItem({ item, state }) {
    let ref = useRef();
    let { rowProps, gridCellProps, isPressed } = useGridListItem(
      { node: item },
      state,
      ref
    );
  
    let { isFocusVisible, focusProps } = useFocusRing();
    let showCheckbox = state.selectionManager.selectionMode !== 'none' &&
      state.selectionManager.selectionBehavior === 'toggle';
  
    return (
      <li
        {...mergeProps(rowProps, focusProps)}
        ref={ref}
        className={`${isPressed ? 'bg-secondary' : ''} ${
          isFocusVisible ? 'bg-black text-white border border-primary' : ''
        } rounded-md`}
      >
        <div className='flex justify-between items-center pl-2' {...gridCellProps}>
          
          {item.rendered}
        </div>
      </li>
    );
  }